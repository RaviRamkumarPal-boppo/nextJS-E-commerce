"use client";

import React, { useEffect, useState } from 'react';
import ProductsPageObj from "@/components/modules/JSON";
import ProductsCards from '@/components/productsCards';
import { IoIosArrowDown } from 'react-icons/io';
import useDebounce from '@/components/debouncing';
import { FiTruck } from 'react-icons/fi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineSupport } from 'react-icons/hi';
import { CgArrowsExchange } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify

function Products() {
  const [openFilter, setOpenFilter] = useState({});
  const [checked, setChecked] = useState({});
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [newProducts, setNewProducts] = useState(ProductsPageObj.ProductsPageObj);

  const debouncedPriceRange = useDebounce(priceRange, 300);

  const filterOption = {
    category: {
      options: ["Sofa Chair", "Wood Chair"],
      type: 'checkbox'
    },
    price: {
      type: 'range',
      min: 0,
      max: 200,
    }
  };

  const handleFilter = (filterKey) => {
    setOpenFilter(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
    toast.info(`Toggled ${filterKey} filter`); // Show toast notification
  };

  const handleCheckboxChange = (filterKey, item) => {
    setChecked(prev => {
      const current = prev[filterKey] || [];
      const newChecked = current.includes(item)
        ? current.filter(i => i !== item)
        : [...current, item];
      toast.info(`${item} ${newChecked.includes(item) ? 'added to' : 'removed from'} ${filterKey} filter`); // Show toast notification
      return { ...prev, [filterKey]: newChecked };
    });
  };

  const handleRangeChange = (e) => {
    const newValue = Number(e.target.value);
    setPriceRange([priceRange[0], newValue]);
  };

  useEffect(() => {
    const rangeData = ProductsPageObj?.ProductsPageObj.filter(
      (item) => (debouncedPriceRange[0] <= item.price && item.price <= debouncedPriceRange[1])
    );
    setNewProducts(rangeData);
  }, [debouncedPriceRange]);

  return (
    <div className='my-[5rem]'>
      <div className='w-10/12 mx-auto'>
        <div className='grid grid-cols-4 gap-5'>
          <div className='col-span-1'>
            <p className='text-3xl font-medium'>Filters Options</p>
            {Object.keys(filterOption).map(filterKey => (
              <div key={filterKey} className='p-5 my-5 rounded-xl border border-[#dce1ee]'>
                <div className='flex justify-between items-center cursor-pointer' onClick={() => handleFilter(filterKey)}>
                  <p className='text-xl font-medium text-[#464545]'>{filterKey}</p>
                  <IoIosArrowDown className='text-xl text-[#464545]' />
                </div>
                {openFilter[filterKey] && filterOption[filterKey].type === 'checkbox' && (
                  <div className='py-3'>
                    {filterOption[filterKey].options.map((item, index) => (
                      <div key={index} className='py-2 px-3 rounded-3xl border mb-2 focus-within:border-[#d09423]'>
                        <input
                          type="checkbox"
                          id={`checkbox-${filterKey}-${index}`}
                          name={filterKey}
                          value={item}
                          checked={checked[filterKey]?.includes(item) || false}
                          onChange={() => handleCheckboxChange(filterKey, item)}
                          className='cursor-pointer'
                        />
                        <label htmlFor={`checkbox-${filterKey}-${index}`} className='ml-2 text-sm text-[#464545] '>{item}</label>
                      </div>
                    ))}
                  </div>
                )}
                {openFilter[filterKey] && filterOption[filterKey].type === 'range' && (
                  <div className='pt-5'>
                    <label htmlFor={`range-${filterKey}`}>
                      ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <input
                      type="range"
                      id={`range-${filterKey}`}
                      name={filterKey}
                      className='w-full mt-2'
                      min={filterOption[filterKey].min}
                      max={filterOption[filterKey].max}
                      value={priceRange[1]}
                      onChange={(e) => handleRangeChange(e)}
                    />
                  </div>
                )}
              </div>
            ))}
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
