"use client";

import React, { useEffect, useState } from 'react';
import ProductsPageObj from "@/components/modules/JSON";
import ProductsCards from '@/components/productsCards';
import FilterOption from '@/components/filterOption';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStateStore from '@/components/zustand';
import useDebounce from '@/components/debouncing';

function SearchProducts() {
    const [searchFilterProduct, setSearchFilterProduct] = useState([]);
    const { searchTerms } = useStateStore();

    const debouncedSearchTerms = useDebounce(searchTerms, 500);

    useEffect(() => {
        const filteredProducts = ProductsPageObj.ProductsPageObj.filter((item) =>
            item.title.toLowerCase().includes(debouncedSearchTerms.toLowerCase())
        );
        setSearchFilterProduct(filteredProducts);
    }, [debouncedSearchTerms]);

    return (
        <div className='my-[5rem]'>
            <div className='w-10/12 mx-auto'>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='col-span-1'>
                        <FilterOption setNewProducts={setSearchFilterProduct} />
                    </div>
                    <div className='col-span-3'>
                        <p className='text-2xl font-medium text-[#464545] pb-5'>Showing {searchFilterProduct.length} result(s)</p>
                        <ProductsCards
                            productData={searchFilterProduct}
                            imageStyle={'w-[270px] h-[250px] object-contain'}
                        />
                    </div>
                </div>
            </div>
            <ToastContainer position='bottom-center' />
        </div>
    );
}

export default SearchProducts;
