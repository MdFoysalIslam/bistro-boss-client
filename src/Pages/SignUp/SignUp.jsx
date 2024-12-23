// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contextProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import GoogleLogin from '../../components/SocialLogin/GoogleLogin';


function SignUp() {
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = React.useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <>
            <Helmet>
                <title> Bistro boss-Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className='text-red-600'>Photo Url is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"{...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true, minLength: 6, maxLength: 20 })} name='password'
                                    placeholder="password" className="input input-bordered" required />

                                {errors.password && <span className='text-red-600'>password must be 6 caracter required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>


                        </form>
                        <p className='p-6'>Already have an account <Link to='/login'>Please Login</Link></p>
                        <GoogleLogin/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;