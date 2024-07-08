'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ProductObj from '@/components/modules/JSON'
import { FaShoppingCart } from 'react-icons/fa'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

function ProductsCards() {

    const [wishlist, setWishlist] = useState({});

    const toggleWishlist = (index) => {
        setWishlist(prevWishlist => ({
            ...prevWishlist,
            [index]: !prevWishlist[index]
        }));
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                ProductObj?.productObj?.map((item, index) => (
                    <div className='col-span-1 text-white relative' key={index}>
                        <div className='bg-[#f5f5f5] rounded-2xl relative'>
                            <div className="flex justify-center items-center p-5">
                                <Image
                                    src={item.image}
                                    alt={`image-${index}`}
                                    width={270}
                                    height={300}
                                    className="w-[270px] h-[300px] object-cover"
                                />
                            </div>
                            <div className='bg-[#2d5356] rounded-lg p-4 flex justify-between items-center'>
                                <div>
                                    <p className='text-xl'>{item.title}</p>
                                    <p className='text-lg'>${item.price}</p>
                                </div>
                                <div className='p-4 bg-white text-2xl text-[#ffa906] rounded-full'>
                                    <FaShoppingCart />
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-3 left-3 right-3 flex justify-between items-center'>
                            <div className='bg-[#2d5356] p-2 rounded-3xl'>-25%</div>
                            <div
                                className='bg-white p-2 text-2xl text-black rounded-full'
                                onClick={() => toggleWishlist(index)}
                            >
                                {wishlist[index] ? <IoHeart className="text-[#f95055]" /> : <IoHeartOutline className='text-black' />}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsCards
