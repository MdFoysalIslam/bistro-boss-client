// @flow strict

import * as React from 'react';

import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaUtensils } from 'react-icons/fa6';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

function UpdateItem() {
    const {name, category, recipe, price, _id} = useLoaderData();

    const { register, handleSubmit, reset} = useForm()
    const item = useLoaderData()
    console.log(item)
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        // image uploded to img bb then get url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        console.log(res.data);
        if (res.data.success) {
            // now send the menu item to the server with image URL
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data)
            if(menuRes.data.modidiedCount){
                
               // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updateed to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh info">

            </SectionTitle>
             <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="form-control w-full my-6">
                                    <div className="label">
                                        <span className="label-text">Recipe name*</span>
                                    </div>
                                    <input
                                        type="text"
                                        defaultValue={name}
                                        placeholder="Type here" {...register('name',{required: true})}
                                        className="input input-bordered w-full" />
                                </label>
            
                                <div className='flex gap-6'>
                                    {/** category*/}
                                    <label className="form-control w-full my-6">
                                        <div className="label">
                                            <span className="label-text">category</span>
                                        </div>
                                        <select defaultValue={category} {...register("category",{required: true})} className='select  select-bordered w-ful'>
                                            <option disabled value='default'>Select a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                    </label>
                                    {/** Price */}
                                    <label className="form-control w-full my-6">
                                        <div className="label">
                                            <span className="label-text">Price</span>
                                        </div>
                                        <input
                                            type="number"
                                            defaultValue={price}
                                            placeholder="Type here" {...register('price',{required: true})}
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                                {/*Recipe Details*/}
                                <label className="form-control my-6">
                                    <div className="label">
                                        <span className="label-text">Recipe Details</span>
                                    </div>
                                    <textarea defaultValue={recipe} {...register('recipe',{required: true})} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
            
                                </label>
                                <div>
                                    <input {...register('image',{required: true})}
                                        type="file"
                                        className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                                </div>
                                <button className='btn btn-secondary'>
                                    Add Item <FaUtensils className='ml-4'></FaUtensils>
                                </button>
            
                            </form>
                        </div>
        </div>
    );
};

export default UpdateItem;