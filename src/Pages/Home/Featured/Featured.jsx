// @flow strict

import * as React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css';

function Featured() {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <SectionTitle subHeading='check it out' heading='Featured Item'>

            </SectionTitle>
            <div className='md:flex justify-center items-center md:ml-10 bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=''>
                    <p>Aug 20 2029</p>
                    <p className='uppercase'>Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem odio sequi in optio reprehenderit cupiditate
                        dicta sunt ratione veniam consequatur suscipit, sed,
                        maxime, eius eaque sit at culpa repudiandae. Laboriosam.
                    </p>
                    <button className="btn btn-outline btn-accent">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;