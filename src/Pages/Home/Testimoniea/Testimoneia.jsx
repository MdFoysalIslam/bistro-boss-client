// @flow strict

import * as React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


function Testimoneia() {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className='my-20'>
            <SectionTitle
                subHeading='what our client say'
                heading='Testimonials'
            >
            </SectionTitle>
            Review: {reviews.length}
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>

                        <div className='flex flex-col items-center mx-24 my-16'>
                           
                            <Rating style={{ maxWidth: 180 }}
                                value={review.rating} 
                                readOnly >
                            </Rating>

                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-2x1 text-orange-400 text-center'>
                                Details   {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimoneia;