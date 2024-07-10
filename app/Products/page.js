"use client";

import React, { useEffect, useState } from 'react';
import ProductsPageObj from "@/components/modules/JSON";
import ProductsCards from '@/components/productsCards';
import { IoIosArrowDown } from 'react-icons/io';
import useDebounce from '@/components/debouncing';

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
  };

  const handleCheckboxChange = (filterKey, item) => {
    setChecked(prev => {
      const current = prev[filterKey] || [];
      const newChecked = current.includes(item)
        ? current.filter(i => i !== item)
        : [...current, item];
      return { ...prev, [filterKey]: newChecked };
    });
  };

  const handleRangeChange = (e) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
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
      </div>
    </div>
  );
}

export default Products;
