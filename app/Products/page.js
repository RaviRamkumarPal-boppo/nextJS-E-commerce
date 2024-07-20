"use client";

import React, { useState } from 'react';
import ProductsPageObj from "@/components/modules/JSON";
import ProductsCards from '@/components/productsCards';
import FilterOption from '@/components/filterOption';
import { FiTruck } from 'react-icons/fi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineSupport } from 'react-icons/hi';
import { CgArrowsExchange } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {

  const [newProducts, setNewProducts] = useState(ProductsPageObj.ProductsPageObj);

  return (
    <div className='my-[5rem]'>
      <div className='w-10/12 mx-auto'>
        <div className='grid grid-cols-4 gap-5'>
          <div className='col-span-1'>
            <FilterOption
              setNewProducts={setNewProducts}
            />
          </div>
          <div className='col-span-3'>
            <p className='text-2xl font-medium text-[#464545] pb-5'>Showing {newProducts.length} result</p>
            <ProductsCards
              productData={newProducts}
              imageStyle={'w-[270px] h-[250px] object-contain'}
            />
          </div>
        </div>
        <div className=' my-[8rem]'>
          <div className='sm:grid sm:grid-cols-4 sm:text-[#3b3836]'>
            <div className='flex md:block items-center space-x-2'>
              <p ><FiTruck className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
              <p className='text-xl lg:text-4xl font-medium'>Fast & Free Shipping</p>
            </div>
            <div className='flex md:block items-center space-x-2'>
              <p><IoBagHandleOutline className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
              <p className='text-xl lg:text-4xl font-medium'>Easy to Shop</p>
            </div>
            <div className='flex md:block items-center space-x-2'>
              <p><HiOutlineSupport className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
              <p className='text-xl lg:text-4xl font-medium'>24/7 Support</p>
            </div>
            <div className='flex md:block items-center space-x-2'>
              <p><CgArrowsExchange className='bg-[#ffa906] text-5xl p-3 my-4 rounded-full' /></p>
              <p className='text-xl lg:text-4xl font-medium'>Hassle Free Returns</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='bottom-center' />
    </div>
  );
}

export default Products;
