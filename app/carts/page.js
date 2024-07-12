"use client";

import useStateStore from '@/components/zustand';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiMinus, FiPlus } from 'react-icons/fi';
import data from '@/components/modules/JSON';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

function Carts() {
    const { cart, updateCart } = useStateStore(); 
    const [productData, setProductData] = useState([]);
    const [quantities, setQuantities] = useState({});

    const handleAddQuantity = (index) => {
        setQuantities((prev) => ({
            ...prev,
            [index]: (prev[index] || 1) + 1,
        }));
        toast.info('Increased quantity'); // Show toast notification
    };

    const handleRemoveQuantity = (index) => {
        setQuantities((prev) => ({
            ...prev,
            [index]: Math.max((prev[index] || 1) - 1, 1),
        }));
        toast.info('Decreased quantity'); // Show toast notification
    };

    const handleRemoveCartProduct = (index) => {
        setQuantities((prev) => {
            const newQuantities = { ...prev };
            delete newQuantities[index];
            return newQuantities;
        });

        setProductData((prev) => {
            const updatedCart = [...prev];
            updatedCart.splice(index, 1);
            updateCart(updatedCart.map(item => item.title)); 
            toast.success('Removed item from cart'); // Show toast notification
            return updatedCart;
        });
    };

    useEffect(() => {
        if (Array.isArray(cart)) {
            const cartData = data?.ProductsPageObj?.filter((item) => cart.includes(item.title));
            setProductData(cartData || []);
        } else {
            console.error('Cart is not an array');
            setProductData([]);
        }
    }, [cart]);

    // Calculate subtotal and total
    const subtotal = productData.reduce((acc, item, index) => acc + (quantities[index] || 1) * item.price, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className='my-[6rem] w-10/12 mx-auto'>
            <div className='grid grid-cols-3 gap-7'>
                <div className='col-span-2'>
                    {productData.length === 0 ? (
                        <p className='text-center text-xl font-semibold'>Missing Cart items?</p>
                    ) : (
                        <table className='min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden'>
                            <thead>
                                <tr className='w-full bg-[#2f5559] text-white'>
                                    <th className='py-3 px-6 text-left font-medium'>Product</th>
                                    <th className='py-3 px-6 text-left font-medium'>Price</th>
                                    <th className='py-3 px-6 text-left font-medium'>Quantity</th>
                                    <th className='py-3 px-6 text-left font-medium'>Subtotal</th>
                                    <th className='py-3 px-6 text-left font-medium'></th>
                                </tr>
                            </thead>
                            <tbody className='pb-5'>
                                {
                                    productData.map((item, index) => (
                                        <tr key={item.title} className='bg-[#f5f5f5] text-[#656565]'>
                                            <td className='py-3 px-6'>
                                                <div className='flex justify-around items-center'>
                                                    <Image
                                                        src={item.image}
                                                        width={50}
                                                        height={50}
                                                        className='mx-auto object-contain'
                                                        alt={item.title}
                                                    />
                                                    <p>{item.title}</p>
                                                </div>
                                            </td>
                                            <td className='py-3 px-6'>${item.price.toFixed(2)}</td>
                                            <td className='py-3 px-6'>
                                                <div className='rounded-3xl bg-[#f5f5f5] p-2 flex justify-between items-center gap-4 w-28'>
                                                    <button className='rounded-full bg-white p-1' disabled={(quantities[index] || 1) <= 1} onClick={() => handleRemoveQuantity(index)}><FiMinus /></button>
                                                    <p>{quantities[index] || 1}</p>
                                                    <button className='rounded-full bg-white p-1' onClick={() => handleAddQuantity(index)}><FiPlus /></button>
                                                </div>
                                            </td>
                                            <td className='py-3 px-6'>${((quantities[index] || 1) * item.price).toFixed(2)}</td>
                                            <td className='py-3 px-6'>
                                                <IoIosCloseCircleOutline className='text-3xl' onClick={() => handleRemoveCartProduct(index)} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )}
                </div>
                <div className='col-span-1'>
                    <table className='w-full bg-[#f5f5f5] rounded-lg overflow-hidden'>
                        <thead>
                            <tr className='bg-[#2f5559] text-white'>
                                <th className='py-3 px-6 text-left font-medium'>Order Summary</th>
                                <th className='py-3 px-6 text-left font-medium'></th>
                            </tr>
                        </thead>
                        <tbody className='text-[#656565]'>
                            <tr>
                                <td className='py-3 px-6'>Subtotal</td>
                                <td className='py-3 px-6'>${subtotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className='py-3 px-6'>Shipping</td>
                                <td className='py-3 px-6'>Free</td>
                            </tr>
                            <tr>
                                <td className='py-3 px-6 text-[#cf911d] flex items-center gap-4'>
                                    Add Coupon Code <FaArrowRightLong />
                                </td>
                                <td className='py-3 px-6'></td>
                            </tr>
                            <tr className='bg-white text-[#444444]'>
                                <td className='py-3 px-6 text-xl font-medium'>Total</td>
                                <td className='py-3 px-6 text-xl font-medium'>${total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className='py-3 px-6 text-center'>
                                    <button className='bg-[#cf911d] text-white px-6 py-3 rounded-3xl'>
                                        Proceed To Checkout
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer /> 
        </div>
    );
}

export default Carts;
