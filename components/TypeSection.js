'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';
import { CgArrowsExchange } from 'react-icons/cg';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiTruck } from 'react-icons/fi';
import { HiOutlineSupport } from 'react-icons/hi';
import { IoBagHandleOutline } from 'react-icons/io5';
import Table from '@/public/pal/table.png';
import Chair from '@/public/pal/chair.png';
import Lamp from '@/public/pal/lamp.png';
import TrendingProducts from '@/components/trendingProducts';
import ExploreBlogs from '@/components/exploreBlogs';
import TypeSection2 from '@/components/TypeSection2';
import Clientsection from '@/components/clientsection';
import data from '@/components/modules/JSON';
import { useRouter } from 'next/navigation';
import FurnitureCategory from './furnitureCategory';

function TypeSection() {

    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const HandleRedirectProducts = () => {
        router.push('/Products')
    }

    return (
        <div className='py-10 flex justify-center'>
            <div className='w-full px-4 sm:w-10/12'>
                <div className='my-[80px]'>
                    <div className='sm:grid sm:grid-cols-4 sm:text-[#3b3836]'>
                        <div className='flex md:block items-center space-x-2'>
                            <p><FiTruck className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-xl lg:text-4xl font-medium'>Fast & Free Shipping</p>
                        </div>
                        <div className='flex md:block items-center space-x-2'>
                            <p><IoBagHandleOutline className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-xl lg:text-4xl font-medium'>Easy to Shop</p>
                        </div>
                        <div className='flex md:block items-center space-x-2'>
                            <p><HiOutlineSupport className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-xl lg:text-4xl font-medium'>24/7 Support</p>
                        </div>
                        <div className='flex md:block items-center space-x-2'>
                            <p><CgArrowsExchange className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-xl lg:text-4xl font-medium'>Hassle Free Returns</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-5'>
                    <div className='col-span-1 lg:col-span-3 rounded-lg'>
                        <div className='grid grid-cols-1 lg:grid-rows-2 gap-5'>
                            <div className='row-span-1 rounded-lg bg-[#f5f5f5]'>
                                <div className='grid grid-cols-1 lg:grid-cols-3 p-8'>
                                    <div className='col-span-1'>
                                        <p className='my-3'>
                                            <span className='text-[#3b3836] font-medium bg-white tracking-widest p-2 my-3 rounded-full px-5'>NEW COLLECTION</span>
                                        </p>
                                        <p className='py-4 font-medium text-[#3b3836] text-xl'>Center Table</p>
                                        <ul className='leading-7'>
                                            <li>Square table</li>
                                            <li>Round table</li>
                                            <li>Wooden table</li>
                                            <li>Glass table</li>
                                        </ul>
                                        <p className='flex items-center py-5 text-[#72898d] underline underline-offset-8 cursor-pointer'
                                            onClick={HandleRedirectProducts}
                                        >
                                            View All&#160;<FaArrowRightLong />
                                        </p>
                                    </div>
                                    <div className='col-span-2'>
                                        <Image src={Table} className='bg-transparent' alt="Table" />
                                    </div>
                                </div>
                            </div>
                            <div className='row-span-1'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <div className='col-span-1 rounded-lg bg-[#f5f5f5]'>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 p-8'>
                                            <div className='col-span-1'>
                                                <p className='my-3'>
                                                    <span className='text-[#3b3836] font-medium bg-white tracking-widest sm:tracking-normal p-2 my-3 rounded-full px-5 sm:px-0'>
                                                        NEW COLLECTION
                                                    </span>
                                                </p>
                                                <p className='py-4 font-medium text-[#3b3836] text-xl'>Lighting Lamp</p>
                                                <ul className='leading-7'>
                                                    <li>Floor lamps</li>
                                                    <li>Tripod lamps</li>
                                                    <li>Table lamps</li>
                                                    <li>Study lamps</li>
                                                </ul>
                                                <p className='flex items-center py-5 text-[#72898d] underline underline-offset-8 cursor-pointer'
                                                    onClick={HandleRedirectProducts}
                                                >
                                                    View All&#160;<FaArrowRightLong />
                                                </p>
                                            </div>
                                            <div className='col-span-1'>
                                                <Image src={Lamp} className='bg-transparent h-full mx-auto' alt="Lamp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-1 header-bg rounded-lg flex justify-center items-center text-white'>
                                        <div className='py-3'>
                                            <p className='bg-[#ffa906] text-center font-medium py-2 px-4 border-white rounded-full mb-3'>
                                                GET DISCOUNT
                                            </p>
                                            <p className='text-3xl'>
                                                20% OFFER
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 lg:col-span-2 bg-[#f5f5f5] rounded-lg'>
                        <div className='p-5'>
                            <p className='my-3'>
                                <span className='text-[#3b3836] font-medium bg-white tracking-widest p-2 my-3 rounded-full px-5'>NEW COLLECTION</span>
                            </p>
                            <p className='py-4 font-medium text-[#3b3836] text-xl'>Accent Chairs</p>
                            <ul className='leading-7'>
                                <li>Arm chair</li>
                                <li>Wing chair</li>
                                <li>Café chair</li>
                                <li>Wheels chair</li>
                            </ul>
                            <p className='flex items-center py-5 text-[#72898d] underline underline-offset-8 cursor-pointer'
                                onClick={HandleRedirectProducts}

                            >
                                View All&#160;<FaArrowRightLong />
                            </p>
                            <div className='w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] float-end'>
                                <Image src={Chair} className='w-full h-full' alt="Chair" />
                            </div>
                        </div>
                    </div>
                </div>

                <FurnitureCategory productObj={data?.categoryObj} title='Featured Categories' />
                <TrendingProducts />
                <TypeSection2 />
                <Clientsection />
                <ExploreBlogs />
            </div>
        </div>
    );
}

export default TypeSection;
