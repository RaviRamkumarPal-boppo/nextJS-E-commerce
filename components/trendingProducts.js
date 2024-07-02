import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Tabs from './tabs'
import ProductsCards from './productsCards'



function trendingProducts() {

    const tabProduct = ['Bed Room', 'Living Room', 'Dining Room', 'Outdoor', 'Indoor'];


    return (
        <div className="my-[100px]">
            <div className="flex justify-between items-center mb-5">
                <p className="text-4xl font-medium">Trending products for you!</p>
                <div className="text-white ">
                    <button className="bg-[#ffa906] text-center font-medium py-3 px-10 border-white rounded-full ">
                        <span className='flex items-center text-xl'>View All Product&#160;<FaArrowRightLong /></span>
                    </button>
                </div>
            </div>

            <Tabs tabData={tabProduct} />

            <ProductsCards />


        </div>
    )
}

export default trendingProducts