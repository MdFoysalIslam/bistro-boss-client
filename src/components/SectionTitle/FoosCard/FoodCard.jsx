// @flow strict

import * as React from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';



function FoodCard({ item }) {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refatch] = useCart()

    const handleAddToCart = food => {
        console.log(user)
        if(user) {
            // Sent cart item to the database
           console.log(user.email, food);
           const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image, price
           }
           axiosSecure.post('/carts', cartItem)
           .then(res => {
            console.log(res.data)
            if(res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} Added to your cart`,
                    showConfirmButton: false,
                    timer: 1000
                });
                // refatch cart to update the cart items for count
                refatch()
            }
           })
           .catch(err => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again later.",
            });
            console.error("Error adding to cart:", err);
           });
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  // send user to the login page
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-0 mr-6 mt-6 px-4 bg-slate-900 text-white'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart}
                        className="btn btn-outline btn-accent bg-slate-100"><p>${price}</p>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

