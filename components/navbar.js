"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa6';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { GoHeart } from 'react-icons/go';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { usePathname } from 'next/navigation';
import useStateStore from "@/components/zustand";
import Modal from '@/components/modules/modal';


// Navigation links
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Products', label: 'Products' },
    { href: '/Categories', label: 'Categories' },
    { href: '/AboutUs', label: 'About Us' },
    { href: '/ContactUs', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
];


// NavLink component
function NavLink({ href, label, pathname }) {
    return (
        <li className='p-2 hover:bg-[#2f757c]'>
            <Link href={href} className={`px-2 lg:px-4 py-2 ${pathname === href ? 'active-Link' : ''}`}>
                {label}
            </Link>
        </li>
    );
}

function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { wishlistCount, cart, updateSearchTerm } = useStateStore();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSearchModel = () => {
        updateSearchTerm('');
        setIsModalOpen(true);
    }

    return (
        <header className="bg-[#264d51] text-white text-lg font-light shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between sm:justify-evenly items-center py-4">
                    <div>
                        <Link href="/" className='text-3xl'>Logo</Link>
                    </div>
                    <div className='hidden sm:block overflow-x-auto overflow-y-hidden'>
                        <ul className='list-none flex'>
                            {navLinks.map(link => (
                                <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <button
                                className="sm:hidden text-xl p-2 hover:bg-[#2f757c]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                            <li className='p-2 text-2xl hover:bg-[#2f757c]' onClick={handleSearchModel}>
                                <CiSearch />
                            </li>
                            <li className='p-2 text-2xl relative hover:bg-[#2f757c]'>
                                <Link href="/wishlist">
                                    <GoHeart />
                                    {wishlistCount.length >= 1 && (
                                        <span className='absolute top-[-6px] right-0 px-[5px] py-[1px] text-xs bg-[#d09423] rounded-full'>
                                            {wishlistCount.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className='p-2 text-2xl relative hover:bg-[#2f757c]'>
                                <Link href="/carts">
                                    <IoBagHandleOutline />
                                    {cart.length >= 1 && (
                                        <span className='absolute top-[-6px] right-0 px-[5px] py-[1px] text-xs bg-[#d09423] rounded-full'>
                                            {cart.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className='p-2 text-2xl hover:bg-[#2f757c]'>
                                <Link href="/profile">
                                    <CgProfile />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className='block sm:hidden flex justify-start'>
                        <ul className='list-none'>
                            {navLinks.map(link => (
                                <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    )
}

export default Navbar;

