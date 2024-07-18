"use client";

import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import useStateStore from "@/components/zustand";
import Link from "next/link";
import { toast } from "react-toastify";

function ProductsCards({ productData, imageStyle }) {
  const { updateWishlistCount, wishlistCount } = useStateStore();
  const pathname = usePathname();

  const toggleWishlist = (title) => {
    if (!wishlistCount.includes(title)) {
      const newWishlistCount = [...wishlistCount, title];
      updateWishlistCount(newWishlistCount);
      toast.info(`${title} added to wishlist`);
    } else {
      const newWishlistCount = wishlistCount.filter(item => item !== title);
      updateWishlistCount(newWishlistCount);
      toast.info(`${title} removed from wishlist`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productData?.length > 0 ? (
        productData.map((item, index) => (
          <div className="col-span-1 text-white relative" key={index}>
            <Link href={`${pathname}/${item.title}/product-details`}>
              <div className="bg-[#f5f5f5] rounded-2xl relative">
                <div className="flex justify-center items-center p-5">
                  <Image
                    src={item.image}
                    alt={`image-${index}`}
                    width={270}
                    height={300}
                    className={`${imageStyle}`}
                  />
                </div>
                <div className="bg-[#2d5356] rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="text-xl">{item.title}</p>
                    <div className="inline-block">
                      <p className="text-lg inline mr-3">${item.price}</p>
                      <del className="inline">
                        <span className="text-xl font-medium text-[#8d8f91] inline">
                          ${item.oldPrice}
                        </span>
                      </del>
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
                onClick={() => toggleWishlist(item?.title)}
              >
                {wishlistCount.includes(item?.title) ? (
                  <IoHeart
                    className="animate-ping text-[#f95055]"
                    style={{ animationIterationCount: 1 }}
                  />
                ) : (
                  <IoHeartOutline className="text-black" />
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-2xl text-black">
          Product list is empty
        </p>
      )}
    </div>
  );
}

export default ProductsCards;
