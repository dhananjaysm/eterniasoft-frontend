"use client";
import React, { Suspense } from "react";
import ProductsDetail from "./ProductsDetail";
import ServiceDetail from "./ServiceDetail";
import Pricing from "./Resources";
import { useSearchParams } from "next/navigation";
function MainNavDetail() {
  const searchParams = useSearchParams();
  const navitem = searchParams.get("navitem");

  function getCorrectNavDetail() {
    switch (navitem) {
      case "Products":
        return <ProductsDetail />;
      case "Services":
        return <ServiceDetail />;
      case "Resources":
        return <Pricing />;
      default:
        return <></>;
    }
  }
  return (
    <div className={`${navitem ? "block" : "hidden"} bg-white h-screen p-6`}>
      {getCorrectNavDetail()}
    </div>
  );
}

export default MainNavDetail;
