import React from 'react';
import footerObj from "@/components/modules/JSON";
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import Link from 'next/link';

function Footer() {
    return (
        <div className='mt-auto'>
            <div className='footer-bg text-white py-8'>
                <div className='w-10/12 mx-auto'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 my-5'>
                        {
                            footerObj?.footerObj?.map((item, index) => (
                                <div key={index} className='col-span-1'>
                                    <ul className='space-y-2'>
                                        <li className='font-medium text-lg pb-3'>{item.title}</li>
                                        {item.footerLink.links.map((link, linkIndex) => (
                                            <li key={linkIndex} className='font-light'>
                                                <Link href={link}>
                                                    {item.footerLink.label[linkIndex]}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='bg-[#d09423] py-4'>
                <div className='w-10/12 mx-auto flex justify-between items-center'>
                    <p className='text-white'>Copyright@2024 companyName. All Rights Reserved.</p>
                    <div className='flex space-x-3'>
                        <div className='bg-yellow-500 p-2 text-2xl text-white rounded-full'>
                            <FaXTwitter />
                        </div>
                        <div className='bg-yellow-500 p-2 text-2xl text-white rounded-full'>
                            <FaInstagram />
                        </div>
                        <div className='bg-yellow-500 p-2 text-2xl text-white rounded-full'>
                            <LuFacebook />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
