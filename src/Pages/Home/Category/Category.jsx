
// @flow strict
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import * as React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import slide6 from '../../../assets/home/slide6.jpg';
import slide7 from '../../../assets/home/slide7.jpg';
import slide8 from '../../../assets/home/slide8.jpg';
import slide9 from '../../../assets/home/slide9.jpg';
import slide10 from '../../../assets/home/slide10.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

function Category() {
    return (
        <section>
            <SectionTitle
              heading={'Order online'}
              subHeading={'From 11.00am to 10.00pm'}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 }
                }}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Shrimpawi</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Pizza" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Sheshawi</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Soup" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Fruits salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Desserts" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Shawirma</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Beef Burger</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide9} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide10} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                
            </Swiper>
        </section>
    );
}

export default Category;





// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// import * as React from 'react';
// import "swiper/css";
// import "swiper/css/pagination"
// import slide1 from '../../../assets/home/slide1.jpg'
// import slide2 from '../../../assets/home/slide2.jpg'
// import slide3 from '../../../assets/home/slide3.jpg'
// import slide4 from '../../../assets/home/slide4.jpg'
// import slide5 from '../../../assets/home/slide5.jpg'
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// function Category() {
//     return (
//         <section>
//             <SectionTitle
//               heading={'Order online'}
//             subHeading={'From 11.00am to 10.00pm'}
//             ></SectionTitle>
//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Pagination]}
//                 className='mySwiper mb-24'
//             >
//                 <SwiperSlide><img src={slide1} alt='salad'></img>
//                     <h3 className='text-4xl uppercase text-center -mt-16 text-white' >Salads
//                     </h3></SwiperSlide>
//                 <SwiperSlide><img src={slide2} alt='pizza'></img>
//                     <h3 className='text-4xl uppercase text-center -mt-16 text-white' >Pizza
//                     </h3></SwiperSlide>
//                 <SwiperSlide><img src={slide3} alt='sopu'></img><h3 className='text-4xl uppercase text-center -mt-16 text-white' >Soup
//                 </h3></SwiperSlide>
//                 <SwiperSlide><img src={slide4} alt='Dessert'></img><h3 className='text-4xl uppercase text-center -mt-16 text-white' >Desserts
//                 </h3></SwiperSlide>
//                 <SwiperSlide><img src={slide5} alt='Salad'></img><h3 className='text-4xl uppercase text-center -mt-16 text-white' >Salads
//                 </h3></SwiperSlide>


//             </Swiper>
//         </section>
//     );
// };

// export default Category;