'use client'

import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import roomsObj from "@/components/modules/JSON";
import Image from 'next/image';

function ExploreBlogs() {

    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-10">
                <p className="text-xl lg:text-4xl font-medium">Trending products for you!</p>
                <div className="text-white ">
                    <button className="animated-button bg-[#ffa906] text-center font-medium py-3 px-10 border-white rounded-full ">
                        <p className='flex items-center text-sm sm:text-xl'>View All Product&#160;<FaArrowRightLong /></p>
                    </button>
                </div>
            </div>

            <div className=''>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5' >
                    {
                        roomsObj?.roomsObj?.map((item, index) => (
                            <div className='col-span-1 h-[400px] rounded-2xl' key={index}>
                                <Image
                                    src={item.image}
                                    alt="Background"
                                    className="rounded-2xl h-72"
                                />
                                <div className="p-4">
                                    <p className="font-medium">First Time Home Owner Ideas</p>
                                    <p className="text-xs text-gray-600">
                                        by <span className="text-black text-sm font-medium">Kristin Watson</span> on <span className="text-orange-500 text-sm font-medium">Apr 19, 2024</span>
                                    </p>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreBlogs