'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const SwiperComponents = ({ slides }) => {
    useEffect(() => {
        // Initialize Swiper
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            direction: 'horizontal',
            loop: true,
            slidesPerView: 5,
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper relative h-96">
            <div className="swiper-wrapper">
                {slides?.length > 0 ? (
                    slides.map((s, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="my-10">
                                <div className="p-9 bg-[#f5f5f5] rounded-full flex justify-center items-center w-[200px] h-[200px]">
                                    <Image src={s.image} alt={`Slide ${index + 1}`} className="w-full h-full" />
                                </div>
                                <div className="text-center mt-5">
                                    <p className="text-lg font-medium mb-1">{s.title}</p>
                                    <p className="text-xs text-[#403e3e]">Discover {s.count} Products</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No categories available</div>
                )}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default SwiperComponents;
