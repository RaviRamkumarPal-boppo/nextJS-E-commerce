import React from 'react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { GoHeart } from 'react-icons/go';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

function Navbar() {
    return (
        <div className="bg-transparent text-white text-lg font-light">
            <div className="container mx-auto px-4">
                <div className="flex justify-evenly py-4">
                    <div >
                        <Link href="/home" className='text-3xl'>Logo</Link>
                    </div>
                    <div>
                        <ul className='list-none flex '>
                            <li><Link href="/home" className='px-4 py-2 active-Link'>Home</Link></li>
                            <li><Link href="/Products" className='px-4 py-2'>Products</Link></li>
                            <li><Link href="/Categories" className='px-4 py-2'>Categories</Link></li>
                            <li><Link href="/AboutUs" className='px-4 py-2'>About us</Link></li>
                            <li><Link href="/ContactUs" className='px-4 py-2'>Contact us</Link></li>
                            <li><Link href="/blog" className='px-4 py-2'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex '>
                            <li className='p-2'><Link href="/login"><CiSearch /></Link></li>
                            <li className='p-2'><Link href="/login"><GoHeart /></Link></li>
                            <li className='p-2'><Link href="/login"><IoBagHandleOutline /></Link></li>
                            <li className='p-2'><Link href="/login"><CgProfile /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
