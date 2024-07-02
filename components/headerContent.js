import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import Bedroom from '@/public/pal/bedroom.jpg'
import Livingroom from '@/public/pal/livingroom.jpg'
import Waitingroom from '@/public/pal/waitingroom.jpg'
import { FaArrowRightLong } from 'react-icons/fa6'


function HeaderContent() {
    return (
        <div className='header-bg text-white'>
            <Navbar />
            <div className='mt-5'>
                <div className='grid grid-cols-2 gap-16'>
                    <div className='flex justify-end items-center'>
                        <div className='w-9/12'>
                            <div >
                                <span className='bg-[#426367] tracking-widest p-2 rounded-full px-5 '>FURNITURE DESIGNS IDEAS</span>
                            </div>
                            <div className='mt-4 mb-10'>
                                <p className='text-[67px] font-medium leading-[77px]'>Modern Interior Design Studio </p>
                            </div>
                            <div>
                                <p className='text-lg'>Choosing the right furniture for your home online will add
                                    elegance and functionality to your interior while also
                                    being cost effective and long lasting.</p>
                            </div>
                            <div className='flex justify-start items-center gap-3 my-10'>
                                <button className='flex items-center text-lg bg-[#d09423] py-4 px-10 rounded-full'>Shop Now&#160;<FaArrowRightLong /></button>

                                <Link href="/home" className='text-lg underline '>Follow Instagram</Link>
                            </div>
                            <div className='flex justify-start gap-12'>
                                <div>
                                    <p className='text-3xl font-medium mb-1'>2500+</p>
                                    <p className='text-base'>Unique Styles</p>
                                </div>
                                <div>
                                    <p className='text-3xl font-medium mb-1'>5000+</p>
                                    <p className='text-base'>Happy Customer</p>
                                </div>
                                <div>
                                    <p className='text-3xl font-medium mb-1'>300+</p>
                                    <p className='text-base'>Certified Outlets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='grid grid-cols-5 gap-3 '>
                            <div className='col-span-3 h-[34rem] mb-[90px]'>
                                <Image src={Bedroom} className='w-full h-full rounded-lg' />
                            </div>
                            <div className='col-span-1 h-[34rem] '>
                                <Image src={Livingroom} className='w-full h-full rounded-lg' />
                            </div>
                            <div className='col-span-1 h-[34rem]'>
                                <Image src={Waitingroom} className='w-full h-full rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderContent