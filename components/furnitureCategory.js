import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import SwiperComponents from '@/components/sliders';
import catObj from '@/components/modules/JSON';

function FurnitureCategory() {
    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-5">
                <p className="text-4xl font-medium">Featured Categories</p>
                <div className="text-white ">
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-prev mr-2">
                        <FaArrowLeftLong />
                    </button>
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next">
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div>
                <SwiperComponents slides={catObj.categoryObj} />
            </div>
        </div>
    );
}

export default FurnitureCategory;
