"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Bedroom from '@/public/pal/bedroom.jpg';
import Livingroom from '@/public/pal/livingroom.jpg';
import Waitingroom from '@/public/pal/waitingroom.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CountUp from 'react-countup';

function HeaderContent() {

    const pathname = usePathname();

    return (
        <div className='header-bg text-white'>
            <div className='mt-5'>
                {pathname === '/' && (
                    <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                        <div className='flex justify-center lg:justify-end items-center px-3'>
                            <div className='w-full sm:w-9/12'>
                                <div className='flex justify-center sm:justify-start'>
                                    <p className='bg-[#426367] tracking-widest p-2 rounded-full px-3 animate-pulse'>FURNITURE DESIGNS IDEAS</p>
                                </div>
                                <div className='mt-4 mb-5 sm:mb-10 flex justify-center'>
                                    <p className='text-[38px] sm:text-[67px] font-medium sm:leading-[77px]'>Modern Interior Design Studio</p>
                                </div>
                                <div>
                                    <p className='text-lg'>
                                        Choosing the right furniture for your home online will add
                                        elegance and functionality to your interior while also
                                        being cost-effective and long-lasting.
                                    </p>
                                </div>
                                <div className='flex justify-start items-center gap-3 my-7 sm:my-10'>
                                    <button className='animated-button flex items-center text-white text-lg bg-[#d09423] py-3 px-10 my-5 rounded-full'>
                                        Shop Now&#160;<FaArrowRightLong />
                                    </button>
                                    <Link href="/home" className='text-lg underline'>Follow Instagram</Link>
                                </div>
                                <div className='flex justify-start gap-12 mb-3'>
                                    <div>
                                        <p className='text-base sm:text-3xl font-medium mb-1'>
                                            <CountUp start={2400} end={2500} duration={2} />
                                            +
                                        </p>
                                        <p className='text-xs sm:text-base'>Unique Styles</p>
                                    </div>
                                    <div>
                                        <p className='text-base sm:text-3xl font-medium mb-1'>
                                            <CountUp start={4900} end={5000} duration={2} />
                                            +
                                        </p>
                                        <p className='text-xs sm:text-base'>Happy Customers</p>
                                    </div>
                                    <div>
                                        <p className='text-base sm:text-3xl font-medium mb-1'>
                                            <CountUp start={200} end={300} duration={2} />
                                            +
                                        </p>
                                        <p className='text-xs sm:text-base'>Certified Outlets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:flex p-2 gap-4 header-section-image'>
                            <div className="w-full sm:w-[400px] h-[20rem] lg:h-[35rem] lg:mb-[90px] relative header-image-1">
                                <Image src={Bedroom} className="w-full h-full rounded-lg" alt="Bedroom" />
                                <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black/90 to-transparent rounded-bl-lg rounded-br-lg"></div>
                                <div className="absolute bottom-0 w-full h-[100px] flex flex-row justify-between items-center p-6 z-10">
                                    <p className="text-2xl text-white">Bed Room</p>
                                    <p className="text-2xl text-white flex items-center">1200+&#160;<p className="text-lg">items</p></p>
                                </div>
                            </div>
                            <div className='w-full sm:w-[150px] h-[20rem] lg:h-[35rem] relative header-image-2'>
                                <Image src={Livingroom} className='w-full h-full rounded-lg object-cover' alt="Livingroom" />
                                <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black/90 to-transparent rounded-bl-lg rounded-br-lg"></div>
                                <div className="absolute bottom-0 w-full h-[200px] flex items-center justify-center z-10">
                                    <p className="text-2xl text-white lg:rotate-[-90deg] whitespace-nowrap">Living Room</p>
                                </div>
                            </div>
                            <div className='w-full sm:w-[150px] h-[20rem] lg:h-[35rem] relative header-image-3'>
                                <Image src={Waitingroom} className='w-full h-full rounded-lg object-cover' alt="Waitingroom" />
                                <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black/90 to-transparent rounded-bl-lg rounded-br-lg"></div>
                                <div className="absolute bottom-0 w-full h-[200px] flex items-center justify-center z-10">
                                    <p className="text-2xl text-white lg:rotate-[-90deg] whitespace-nowrap">Waiting Room</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {pathname !== '/' && (
                    <div className='flex justify-center items-center h-52'>
                        <p className='text-3xl font-medium'>
                            {pathname}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HeaderContent;
