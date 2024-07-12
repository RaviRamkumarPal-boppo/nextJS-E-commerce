'use client'

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Bedroom from '@/public/pal/bedroom.jpg';
import Livingroom from '@/public/pal/livingroom.jpg';
import Waitingroom from '@/public/pal/waitingroom.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { GoHeart } from 'react-icons/go';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { usePathname } from 'next/navigation';
import useStateStore from "@/components/zustand";
import { FaBars, FaTimes } from 'react-icons/fa';

function HeaderContent() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { quantity, wishlistCount, cart } = useStateStore();

    const navLinks = useMemo(() => [
        { href: '/', label: 'Home' },
        { href: '/Products', label: 'Products' },
        { href: '/Categories', label: 'Categories' },
        { href: '/AboutUs', label: 'About Us' },
        { href: '/ContactUs', label: 'Contact Us' },
        { href: '/blog', label: 'Blog' },
    ], []);


    return (
        <div className='header-bg text-white '>
            <div className="bg-transparent text-white text-lg font-light shadow-md transition-transform	">
                <div className="container mx-auto px-4 ">
                    <div className="flex justify-between sm:justify-evenly py-4 ">
                        <div>
                            <Link href="/" className='text-3xl'>Logo</Link>
                        </div>
                        <div className='hidden sm:block overflow-x-auto overflow-y-hidden'>
                            <ul className='list-none flex'>
                                {navLinks.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={`px-2 lg:px-4 py-2 ${pathname === link.href ? 'active-Link' : ''}`}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <ul className='flex '>
                                <button
                                    className="sm:hidden text-xl p-2 hover:bg-[#2f757c]"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>
                                <li className='p-2 text-lg hover:bg-[#2f757c]'><Link href="/search"><CiSearch /></Link></li>
                                <li className='p-2 text-lg relative hover:bg-[#2f757c]'><Link href="/wishlist"><GoHeart /></Link>
                                    {wishlistCount >= 1 && <span className='absolute top-[-6px] right-0  px-[5px] py-[1px] text-xs bg-[#d09423] rounded-full'>{wishlistCount}</span>}
                                </li>
                                <li className='p-2 text-lg relative hover:bg-[#2f757c]'><Link href="/carts"><IoBagHandleOutline /></Link>
                                    {cart.length >= 1 && <span className='absolute top-[-6px] right-0  px-[5px] py-[1px] text-xs bg-[#d09423] rounded-full'>{cart.length}</span>}
                                </li>
                                <li className='p-2 text-lg hover:bg-[#2f757c]'><Link href="/profile"><CgProfile /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {
                        isMobileMenuOpen &&
                        <div className='block sm:hidden flex justify-start'>
                            <ul className='list-none '>
                                {navLinks.map(link => (
                                    <li key={link.href} className='p-2'>
                                        <Link href={link.href} className={`p-2 ${pathname === link.href ? 'mobile-active-Link' : ''}`}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }

                </div>
            </div>
            <div className='mt-5'>
                {pathname === '/' && (
                    <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                        <div className='flex justify-center lg:justify-end items-center px-3'>
                            <div className='w-full sm:w-9/12'>
                                <div className='flex justify-center sm:justify-start'>
                                    <span className='bg-[#426367] tracking-widest p-2 rounded-full px-3 animate-pulse'>FURNITURE DESIGNS IDEAS</span>
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
                                <div className='flex justify-start items-center gap-3 my-7 sm:my-10 '>
                                    <button className='flex items-center text-lg bg-[#d09423] py-2 sm:py-4 px-5 sm:px-10 rounded-full'>
                                        Shop&#160;Now&#160;<FaArrowRightLong />
                                    </button>
                                    <Link href="/home" className='text-lg underline'>Follow Instagram</Link>
                                </div>
                                <div className='flex justify-start gap-12 mb-3'>
                                    <div>
                                        <p className='text-base sm:text-3xl font-medium mb-1'>2500+</p>
                                        <p className='text-xs sm:text-base'>Unique Styles</p>
                                    </div>
                                    <div>
                                        <p className='text-base sm:text-3xl font-medium mb-1'>5000+</p>
                                        <p className='text-xs sm:text-base'>Happy Customers</p>
                                    </div>
                                    <div>
                                        <p className='text-base sm:text-3xl font-medium mb-1'>300+</p>
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
                                    <p className="text-2xl text-white flex items-center">1200+&#160;<span className="text-lg">items</span></p>
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
