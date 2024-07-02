import Image from 'next/image'
import React from 'react'
import { CgArrowsExchange } from 'react-icons/cg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FiTruck } from 'react-icons/fi'
import { HiOutlineSupport } from 'react-icons/hi'
import { IoBagHandleOutline } from 'react-icons/io5'
import Table from '@/public/pal/table.png'
import Chair from '@/public/pal/chair.png'
import Lamp from '@/public/pal/lamp.png'
import FurnitureCategory from '@/components/furnitureCategory'
import TrendingProducts from '@/components/trendingProducts'


function TypeSection() {
    return (
        <div className='py-10 flex justify-center'>
            <div className='w-10/12'>

                <div className=' my-[80px]'>
                    <div className='grid grid-cols-4 text-[#3b3836]'>
                        <div >
                            <p ><FiTruck className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-4xl font-medium'>Fast & Free Shipping</p>
                        </div>
                        <div>
                            <p><IoBagHandleOutline className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-4xl font-medium'>Easy to Shop</p>
                        </div>
                        <div>
                            <p><HiOutlineSupport className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-4xl font-medium'>24/7 Support</p>
                        </div>
                        <div>
                            <p><CgArrowsExchange className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
                            <p className='text-4xl font-medium'>Hassle Free Returns</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-5 '>
                    <div className='col-span-3 rounded-lg'>

                        <div className='grid grid-rows-2 gap-5'>
                            <div className='row-span-1 rounded-lg bg-[#f5f5f5]'>
                                <div className='grid grid-cols-3 p-8'>

                                    <div className='col-span-1'>
                                        <p className='my-3'>
                                            <span className='text-[#3b3836] font-medium bg-white tracking-widest p-2 my-3 rounded-full px-5 '>NEW COLLECTION</span>
                                        </p>
                                        <p className='py-4 font-medium text-[#3b3836] text-xl'>Center Table</p>
                                        <ul className='leading-7'>
                                            <li>Square table</li>
                                            <li>Round table</li>
                                            <li>Wooden table</li>
                                            <li>Glass table</li>
                                        </ul>
                                        <p className='flex items-center py-5 text-[#72898d] underline underline-offset-8'>
                                            View All&#160;<FaArrowRightLong />
                                        </p>
                                    </div>

                                    <div className='col-span-2'>
                                        <Image src={Table} className='bg-transparent' />
                                    </div>
                                </div>
                            </div>
                            <div className='row-span-1'>

                                <div className='grid grid-cols-2 gap-5'>
                                    <div className='col-span-1 rounded-lg bg-[#f5f5f5]'>

                                        <div className='grid grid-cols-2 p-8'>

                                            <div className='col-span-1'>
                                                <p className='my-3'>
                                                    <span className='text-[#3b3836] text-sm font-medium bg-white p-2 my-3 rounded-full '>NEW COLLECTION</span>
                                                </p>
                                                <p className='py-4 font-medium text-[#3b3836] text-xl'>Lighting Lamp</p>
                                                <ul className='leading-7'>
                                                    <li>Flore lamps</li>
                                                    <li>Tripod lamps</li>
                                                    <li>Table lamps</li>
                                                    <li>Study lamps</li>
                                                </ul>

                                                <p className='flex items-center py-5 text-[#72898d] underline underline-offset-8'>
                                                    View All&#160;<FaArrowRightLong />
                                                </p>
                                            </div>

                                            <div className='col-span-1'>
                                                <Image src={Lamp} className='bg-transparent h-full' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-span-1 header-bg rounded-lg flex justify-center items-center text-white'>
                                        <div className=''>
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
                    <div className='col-span-2 bg-[#f5f5f5] rounded-lg bg-[#f5f5f5]'>

                        <div className='p-5'>
                            <p className='my-3'>
                                <span className='text-[#3b3836] font-medium bg-white tracking-widest p-2 my-3 rounded-full px-5 '>NEW COLLECTION</span>
                            </p>
                            <p className='py-4 font-medium text-[#3b3836] text-xl'>Accent Chairs</p>
                            <ul className='leading-7'>
                                <li>Arm chair</li>
                                <li>wing chair</li>
                                <li>cafe chair</li>
                                <li>wheels chair</li>
                            </ul>
                            <p className='flex items-center py-5 text-[#72898d] underline underline-offset-8'>
                                View All&#160;<FaArrowRightLong />
                            </p>

                            <div className='w-[300px] h-[400px] float-end'>
                                <Image src={Chair} className='w-full h-full' />
                            </div>
                        </div>

                    </div>

                </div>
                <FurnitureCategory />
                <TrendingProducts />
            </div>
        </div>

    )
}

export default TypeSection
