import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong, FaClockRotateLeft } from 'react-icons/fa6'
import Chair from '@/public/pal/chair.png'
import Table from '@/public/pal/table.png'
import bookshelf from '@/public/pal/bookshelf.jpg'
import Livingroom from '@/public/pal/livingroom.jpg'


function TypeSection2() {
    return (
        <>
            <div className='my-10'>
                <div className='hidden sm:grid sm:grid-cols-3 sm:gap-5'>
                    <div className='col-span-2 rounded-2xl bg-[#f5f5f5] p-5'>
                        <div className='flex justify-between items-center p-5 mt-5'>
                            <div className='w-6/12'>
                                <p className='py-4 font-medium text-[#3b3836] text-5xl'>Flash Sale!</p>
                                <p className='text-[#656463]'>Act fast to grab incredible deals on select
                                    furniture pieces in our limited-tim
                                    Copyfish</p>
                            </div>
                            <div className='w-6/12 flex justify-center items-center'>
                                <div>
                                    <div className='flex justify-center items-center'>
                                        <p className='flex text-[#656463]'><FaClockRotateLeft />&#160;End time </p>
                                    </div>
                                    <div className='flex mt-2'>
                                        <span className='bg-white p-2 rounded-xl mx-1'>12&#160;H</span>
                                        <span className='bg-white p-2 rounded-xl mx-1'>24&#160;M</span>
                                        <span className='bg-white p-2 rounded-xl mx-1'>57&#160;S</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center px-5 mb-6">
                            <div className='w-6/12'>
                                <Image
                                    src={Chair}
                                    alt={`image`}
                                    width={270}
                                    height={300}
                                    className="w-full h-[260px] object-contain "
                                />
                                <div className='flex items-center justify-center'>
                                    <p className='text-3xl font-semibold'>$599</p>&#160;
                                    <del className='text-[#c0bdbc]'><p className='text-xl font-medium text-gray-500'>$799</p></del>
                                </div>
                            </div>
                            <div className='w-6/12'>
                                <p className='py-4 font-semibold text-[#3b3836] text-2xl'>Vintage Leather Armchai</p>
                                <p className='text-[#656463]'>Bring a touch of retro charm to your home
                                    with this vintage leather armchair. Sturdy
                                    construction ensures durability.</p>

                                <button className='flex items-center text-white text-lg bg-[#d09423] py-3 px-10 my-5 rounded-full'>Shop Now&#160;<FaArrowRightLong /></button>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <div className='grid grid-rows-2 gap-5'>
                            <div className='row-span-1 rounded-2xl bg-[#f5f5f5] p-5'>
                                <div>
                                    <Image src={Table} alt='table' />
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium'>Rustic Coffee Table</p>
                                        <button className="bg-[#ffa906] text-center text-white font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next">
                                            <FaArrowRightLong />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='row-span-1 rounded-2xl bg-[#f5f5f5] p-5'>
                                <div>
                                    <Image src={bookshelf} alt='bookshelf' />
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium'>Modern Bookshelf</p>
                                        <button className="bg-[#ffa906] text-center text-white font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next">
                                            <FaArrowRightLong />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sm:hidden grid grid-rows-2 gap-5'>
                    <div className='row-span-1 rounded-2xl bg-[#f5f5f5] p-5'>
                        <div>
                            <Image src={Table} alt='table' />
                            <div className='flex justify-between items-center mt-3'>
                                <p className='font-medium'>Rustic Coffee Table</p>
                                <button className="bg-[#ffa906] text-center text-white font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next">
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-1 rounded-2xl bg-[#f5f5f5] p-5'>
                        <div>
                            <Image src={bookshelf} alt='bookshelf' />
                            <div className='flex justify-between items-center mt-3'>
                                <p className='font-medium'>Modern Bookshelf</p>
                                <button className="bg-[#ffa906] text-center text-white font-medium py-3 px-5 border-white rounded-full custom-swiper-button-next">
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='my-[100px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className='col-span-1'>
                        <div className="relative h-[500px] rounded-2xl">
                            <Image
                                src={Livingroom}
                                alt="Background"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                            <div className="relative z-10 p-10 text-white">
                                <p className='py-5'>Exclusive Offer&#160;&#160;<span className='bg-white px-3 py-1 rounded-2xl text-xs text-[#d09423]'>15% OFF</span></p>
                                <p className='text-4xl font-medium'>Best Online <br /> Deals, Free Stuff</p>
                                <p className='py-5'>Only on this week... Donit miss</p>
                                <button className='flex items-center text-white text-lg bg-[#d09423] py-3 px-10 my-5 rounded-full'>Get Best Deal&#160;<FaArrowRightLong /></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <div className='h-[500px] rounded-2xl bg-[#f5f5f5] p-10 '>
                            <div className="relative z-10 text-white">
                                <p className='text-black py-5'>Regular Offer</p>
                                <p className='text-black text-4xl font-medium'>10% cash-back<br />on personal care</p>
                                <p className='text-black py-5'>Max cashback: $12. Code: CADHL837</p>
                                <button className='flex items-center text-white text-lg bg-[#2d5356] py-3 px-10 my-5 rounded-full'>Shop Now&#160;<FaArrowRightLong /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypeSection2