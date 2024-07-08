'use client'

import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import data from '@/components/modules/JSON';


function Clientsection() {

    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-5">
                <p className="text-xl lg:text-4xl font-medium">Featured Categories</p>
                <div className="flex text-white">
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-prev mr-2"
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next"
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div className="relative w-full ">
                <Swiper
                    loop={true}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    modules={[Navigation, Pagination]}
                    className="swiper-container"
                    spaceBetween={20}
                    slidesPerView={1.5}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {data?.clientObj?.length > 0 ? (
                        data?.clientObj?.map((s, index) => (
                            <SwiperSlide key={index} className="flex items-center">
                                <div className="bg-[#2d5356] rounded-2xl">
                                    <div className='block sm:flex gap-8 p-5'>
                                        <div className='sm:w-5/12 h-[400px]'>
                                            <Image src={s.image} alt={`image-${index}`} className='w-full h-full rounded-xl' />
                                        </div>
                                        <div className='sm:w-7/12 flex items-center'>

                                            <div className='text-white mt-3'>
                                                <p>{s.description}</p>
                                                <hr className='my-5 opacity-70' />
                                                <pre>
                                                    <p>{s.name}</p>
                                                    <p className='font-extralight italic'> - {s.address}</p>
                                                </pre>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <div className="text-center">No categories available</div>
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Clientsection