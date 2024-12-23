// @flow strict

import * as React from 'react';
import FoodCard from '../../components/SectionTitle/FoosCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";



function OrderTab({ items }) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" >' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Swiper pagination={pagination}
                module={[pagination]}
                className='mySwiper'>

                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;