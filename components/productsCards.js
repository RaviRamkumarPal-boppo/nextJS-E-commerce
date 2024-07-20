"use client"

import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useRouter, usePathname } from 'next/navigation';
import useStateStore from '@/components/zustand';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize the toast container in your app root or a higher-level component
const notify = (message) => toast(message);

function ProductsCards({ productData, imageStyle }) {
    const { toggleWishlist, wishlistCount } = useStateStore();
    const router = useRouter();
    const pathname = usePathname();

    const handleToggleWishlist = (title) => {
        toggleWishlist(title);
        const message = wishlistCount.includes(title) 
            ? `${title} removed from wishlist!` 
            : `${title} added to wishlist!`;
        notify(message);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData?.length > 0 ? (
                productData.map((item, index) => (
                    <div className="col-span-1 text-white relative" key={index}>
                        <Link href={`${pathname}/${item.title}/product-details`} passHref>
                            <div className="bg-[#f5f5f5] rounded-2xl relative block cursor-pointer">
                                <div className="flex justify-center items-center p-5">
                                    <Image
                                        src={item.image}
                                        alt={`image-${index}`}
                                        width={270}
                                        height={300}
                                        className={imageStyle}
                                    />
                                </div>
                                <div className="bg-[#2d5356] rounded-lg p-4 flex justify-between items-center">
                                    <div>
                                        <p className="text-xl">{item.title}</p>
                                        <div className="inline-block">
                                            <p className="text-lg inline mr-3">${item.price}</p>
                                            {item.oldPrice && (
                                                <s className="text-xl font-medium text-[#8d8f91] inline">
                                                    ${item.oldPrice}
                                                </s>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white text-2xl text-[#ffa906] rounded-full">
                                        <FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                            <div className="bg-[#2d5356] p-2 rounded-3xl">-25%</div>
                            <div
                                className="bg-white p-2 text-2xl text-black rounded-full cursor-pointer"
                                onClick={() => handleToggleWishlist(item.title)}
                            >
                                {wishlistCount.includes(item.title) ? (
                                    <IoHeart
                                        className="animate-ping text-3xl text-[#f95055]"
                                        style={{ animationIterationCount: 1 }}
                                    />
                                ) : (
                                    <IoHeartOutline className="text-black text-3xl" />
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="col-span-3 text-center text-2xl text-black">Product list is empty</p>
            )}
            <ToastContainer position='bottom-center' />
        </div>
    );
}

export default ProductsCards;
