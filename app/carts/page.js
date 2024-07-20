'use client';


import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { FiMinus, FiPlus } from 'react-icons/fi';
import data from '@/components/modules/JSON';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
import useStateStore from '@/components/zustand';

function Carts() {
  const {
    quantities,
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useStateStore();
  const [productData, setProductData] = useState([]);

  const handleAddQuantity = (title) => {
    increaseQuantity(title);
    toast.info('Increased quantity');
  };

  const handleRemoveQuantity = (title) => {
    decreaseQuantity(title);
    toast.info('Decreased quantity');
  };

  const handleRemoveCartProduct = (index) => {
    const removedProduct = productData[index];
    removeFromCart(removedProduct.title);

    setProductData((prev) => {
      const updatedProducts = [...prev];
      updatedProducts.splice(index, 1);
      return updatedProducts;
    });

    toast.success('Removed item from cart');
  };

  useEffect(() => {
    if (Array.isArray(cart)) {
      const cartData = data?.ProductsPageObj?.filter((item) =>
        cart.includes(item.title)
      );
      setProductData(cartData || []);
    } else {
      console.error('Cart is not an array');
      setProductData([]);
    }
  }, [cart]);

  const subtotal = productData.reduce(
    (acc, item) => acc + (quantities[item.title] || 1) * item.price,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="my-[6rem] w-10/12 mx-auto">
      {productData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-56">
          <p className="text-xl font-semibold">Missing Cart items?</p>
          <Link
            href="/Products"
            className="flex items-center hover:underline mt-4"
          >
            <FaArrowLeftLong className="p-2 text-4xl text-[#d09423]" />
            <p className="text-xl text-[#d09423]">Back to products</p>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-2">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="w-full bg-[#2f5559] text-white">
                  <th className="py-3 px-6 text-left font-medium">Product</th>
                  <th className="py-3 px-6 text-left font-medium">Price</th>
                  <th className="py-3 px-6 text-left font-medium">Quantity</th>
                  <th className="py-3 px-6 text-left font-medium">Subtotal</th>
                  <th className="py-3 px-6 text-left font-medium"></th>
                </tr>
              </thead>
              <tbody className="pb-5 cursor-pointer">
                {productData.map((item, index) => (
                  <tr key={item.title} className="bg-[#f5f5f5] text-[#656565]">
                    <td className="py-3 px-6">
                      <div className="flex justify-around items-center">
                        <Image
                          src={item.image}
                          width={50}
                          height={50}
                          className="mx-auto object-contain"
                          alt={item.title}
                        />
                        <p>{item.title}</p>
                      </div>
                    </td>
                    <td className="py-3 px-6">${item.price.toFixed(2)}</td>
                    <td className="py-3 px-6">
                      <div className="rounded-3xl bg-[#f5f5f5] p-2 flex justify-between items-center gap-4 w-28">
                        <button
                          className="rounded-full bg-white p-1"
                          disabled={(quantities[item.title] || 1) <= 1}
                          onClick={() => handleRemoveQuantity(item.title)}
                        >
                          <FiMinus />
                        </button>
                        <p>{quantities[item.title] || 1}</p>
                        <button
                          className="rounded-full bg-white p-1"
                          onClick={() => handleAddQuantity(item.title)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      ${((quantities[item.title] || 1) * item.price).toFixed(2)}
                    </td>
                    <td className="py-3 px-6">
                      <IoIosCloseCircleOutline
                        className="text-3xl cursor-pointer"
                        onClick={() => handleRemoveCartProduct(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-1">
            <table className="w-full bg-[#f5f5f5] rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#2f5559] text-white">
                  <th className="py-3 px-6 text-left font-medium">
                    Order Summary
                  </th>
                  <th className="py-3 px-6 text-left font-medium"></th>
                </tr>
              </thead>
              <tbody className="text-[#656565]">
                <tr>
                  <td className="py-3 px-6">Subtotal</td>
                  <td className="py-3 px-6">${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-6">Shipping</td>
                  <td className="py-3 px-6">Free</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-[#cf911d] flex items-center gap-4">
                    Add Coupon Code <FaArrowRightLong />
                  </td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="bg-white text-[#444444]">
                  <td className="py-3 px-6 text-xl font-medium">Total</td>
                  <td className="py-3 px-6 text-xl font-medium">
                    ${total.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="py-3 px-6 text-center">
                    <button className="bg-[#cf911d] text-white px-6 py-3 rounded-3xl">
                      Proceed To Checkout
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default Carts;
