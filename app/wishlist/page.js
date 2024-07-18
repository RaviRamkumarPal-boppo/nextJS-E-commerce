"use client";

import React, { useEffect, useState } from "react";
import ProductsCards from "@/components/productsCards";
import ProductsPageObj from "@/components/modules/JSON";
import useStateStore from "@/components/zustand";

function Wishlist() {
  const { wishlistCount } = useStateStore();
  const newProducts = ProductsPageObj.ProductsPageObj;
  const [data, setData] = useState();

  useEffect(() => {
    const wishlistProducts = newProducts.filter((item) =>
      wishlistCount.includes(item.title)
    );
    setData(wishlistProducts);
  }, [newProducts, wishlistCount]);

  return (
    <div className="my-[6rem] w-9/12 mx-auto">
      <p className="text-2xl font-medium text-[#464545] pb-5">
        Showing {data?.length || []}
        {newProducts.length === 1 ? "result" : "results"}
      </p>
      <ProductsCards
        productData={data || []}
        imageStyle={"w-[270px] h-[250px] object-contain"}
      />
    </div>
  );
}

export default Wishlist;
