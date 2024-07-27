'use client'

import React, { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function FurnitureCategory({ productObj, title }) {
    const swiperRef = useRef(null);

    const pathname = usePathname();

    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-5">
                <p className="text-xl lg:text-4xl font-medium">{title}</p>
                <div className="flex text-white">
                    <button
                        className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-prev mr-2"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div>
                <div className="relative w-full h-80">
                    <Swiper
                        ref={swiperRef}
                        loop={true}
                        navigation={{
                            nextEl: '.custom-swiper-button-next',
                            prevEl: '.custom-swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        modules={[Navigation, Pagination]}
                        className="swiper-container"
                        spaceBetween={20}
                        slidesPerView={5}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {productObj?.length > 0 ? (
                            productObj.map((s, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <div className="text-center">
                                        <Link href={`/Products/${s.title}/product-details`}>
                                            <div className="p-9 bg-[#f5f5f5] rounded-full flex justify-center items-center w-[200px] h-[200px] mx-auto">
                                                <Image src={s.image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
                                            </div>
                                        </Link>
                                        <div className="mt-5">
                                            <p className="text-lg font-medium mb-1">{s.title}</p>
                                            <p className="text-xs text-[#403e3e]">Discover {s.count} Products</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="text-center">No categories available</div>
                        )}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
}

export default FurnitureCategory;
