"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CiSaveDown2 } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import FurnitureCategory from "@/components/furnitureCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStateStore from "@/components/zustand";
import ProductsPageObj from "@/components/modules/JSON";
import { FaArrowLeft, FaStar } from "react-icons/fa6";

function ProductDetails({ params }) {
  const pathname = usePathname();
  const [productDetail, setProductDetail] = useState(null);
  const {
    quantities,
    updateWishlistCount,
    updateQuantity,
    wishlistCount,
    removeQuantity,
    cart,
    updateCart,
  } = useStateStore();

  useEffect(() => {
    const data = ProductsPageObj?.ProductsPageObj;
    const productData = data.find((item) => item.title === params.id);
    setProductDetail(productData);
  }, [params.id]);

  const toggleWishlist = (title) => {
    if (!wishlistCount.includes(title)) {
      const newWishlistCount = [...wishlistCount, title];
      updateWishlistCount(newWishlistCount);
      toast.info(`${title} added to wishlist`);
    } else {
      const newWishlistCount = wishlistCount.filter((item) => item !== title);
      updateWishlistCount(newWishlistCount);
      toast.info(`${title} removed from wishlist`);
    }
  };

  const handleAddToCart = (title) => {
    if (!cart.includes(title)) {
      const newCart = [...cart, title];
      updateCart(newCart);
      toast.success(`${title} added to cart`);
    } else {
      toast.warn(`${title} is already in the cart`);
    }
  };

  const defaultQuantity = quantities[productDetail?.title] || 1;

  if (!productDetail) return null;

  return (
    <div className="my-[6rem] w-10/12 mx-auto">
      <div className="flex justify-start items-center mb-4">
        <Link href={"/Products"} className="flex items-center hover:underline">
          <FaArrowLeft className="p-2 text-4xl text-[#d09423]" />
          <span className="text-xl text-[#d09423]">Back to products</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <div className="h-[500px] rounded-2xl">
            <Image
              src={productDetail?.image}
              className="h-full w-full rounded-2xl"
              alt={"images"}
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-xl bg-[#f5f5f5] mb-6">
            <p className="p-6 text-2xl flex items-center">
              <CiSaveDown2 />
              Save 25$
            </p>
          </div>
          <div className="mb-6">
            <p className="py-4 text-[#767676] text-lg">
              {productDetail?.title}
            </p>
            <p className="text-[#4f4f4f] text-xl font-normal">
              {productDetail?.description}
            </p>
          </div>
          <div className="flex items-center mb-6">
            <p className="text-3xl font-medium mr-3">${productDetail?.price}</p>
            <del className="text-2xl font-medium text-[#8d8f91]">
              ${productDetail?.oldPrice}
            </del>
          </div>
          <div className="mb-6">
            <p className="text-xl text-[#6d7378]">
              Product code: {productDetail?.productCode}
            </p>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <p className="text-xl flex items-center gap-1">
              <FaStar className="text-[#f4a91c]" /> {productDetail?.rating}
            </p>
            <p className="text-xl text-[#6d7378]">
              {productDetail?.reviews} Reviews
            </p>
            <p className="text-xl text-[#6d7378]">{productDetail?.sold} sold</p>
          </div>
          <div className="rounded-3xl bg-[#f5f5f5] p-2 flex justify-between items-center gap-4 w-28">
            <button
              className="rounded-full bg-white p-1"
              disabled={quantities[productDetail?.title] <= 1}
              onClick={() => removeQuantity(productDetail?.title)}
            >
              <FiMinus />
            </button>
            <p>{defaultQuantity}</p>
            <button
              className="rounded-full bg-white p-1"
              onClick={() => updateQuantity(productDetail?.title)}
            >
              <FiPlus />
            </button>
          </div>
          <div className="my-5 flex gap-6">
            <button className="flex items-center text-white text-lg bg-[#d09423] py-2 sm:py-4 px-5 sm:px-10 rounded-full">
              Shop Now
            </button>
            <button
              className="flex items-center text-white text-lg bg-[#2d5356] py-2 sm:py-4 px-5 sm:px-10 rounded-full"
              onClick={() => handleAddToCart(productDetail?.title)}
            >
              Add To Cart
            </button>
            <div
              className="p-2 text-2xl text-black rounded-full border border-[#cfc8c8] flex items-center px-4 cursor-pointer"
              onClick={() => toggleWishlist(productDetail?.title)}
            >
              {wishlistCount.includes(productDetail?.title) ? (
                <IoHeart
                  className="animate-ping text-3xl text-[#f95055]"
                  style={{ animationIterationCount: 1 }}
                />
              ) : (
                <IoHeartOutline className="text-black text-3xl" />
              )}
            </div>
          </div>
        </div>
      </div>
      <FurnitureCategory
        productObj={ProductsPageObj?.ProductsPageObj}
        title={"Discover Similar Items"}
      />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default ProductDetails;
