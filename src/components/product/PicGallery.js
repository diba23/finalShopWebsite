import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

import '../../asset/css/picGallery.css';

SwiperCore.use([Navigation, Thumbs]);


const PicGallery = ({ result }) => {
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
        const gallery = result.image;


        console.log(gallery && gallery)


        return (
                <div className="productDeGallery" >


                        <Swiper style={{ '--swiper-navigation-color': '#424242', '--swiper-pagination-color': '#fff' }} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 pro">
                                {
                                        gallery && gallery.map((im) => (
                                                <SwiperSlide key={result.id}><img src={im} alt={result.alt} /></SwiperSlide>
                                        ))
                                }
                        </Swiper>

                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper pro ">
                                {
                                        gallery && gallery.map((im) => (
                                                <SwiperSlide key={result.id}><img src={im} alt={result.alt}/></SwiperSlide>
                                        ))
                                }
                        </Swiper>

                </div >
        )
};

export default PicGallery;


