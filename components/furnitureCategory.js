
'use client'

import React, { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import SwiperComponent from '@/components/simpleswiper';
import data from '@/components/modules/JSON'; 

function FurnitureCategory() {
  const swiperRef = useRef(null);

    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-5">
                <p className="text-xl lg:text-4xl font-medium">Featured Categories</p>
                <div className="flex text-white">
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-prev mr-2"
                    onClick={() => swiperRef.current.swiper.slidePrev()}>
                        <FaArrowLeftLong />
                    </button>
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next"
                    onClick={() => swiperRef.current.swiper.slideNext()}>
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div>
                <SwiperComponent ref={swiperRef} productObj={data?.productObj} />
            </div>
        </div>
    );
}

export default FurnitureCategory;
