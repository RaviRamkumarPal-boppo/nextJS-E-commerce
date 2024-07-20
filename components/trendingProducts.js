import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Tabs from './tabs'
import ProductsCards from './productsCards'
import productObj from '@/components/modules/JSON'



function trendingProducts() {


    const tabProduct = ['Bed Room', 'Living Room', 'Dining Room', 'Outdoor', 'Indoor'];


    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-5">
                <p className="text-xl lg:text-4xl font-medium">Trending products for you!</p>
                <div className="text-white ">
                    <button className="animated-button bg-[#ffa906] text-center font-medium py-2 lg:py-3 px-6 lg:px-10 border-white rounded-full">
                        <span className='flex items-center text-sm sm:text-xl'>
                            View All Products&#160;<FaArrowRightLong />
                        </span>
                    </button>

                </div>
            </div>

            <Tabs tabData={tabProduct} />

            <ProductsCards
                productData={productObj?.productObj}
                imageStyle={'w-[270px] h-[300px] object-cover'}
            />


        </div>
    )
}

export default trendingProducts