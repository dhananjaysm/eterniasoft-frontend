import React from "react";
import flicker from "./../../../public/svg/flickr4.svg";
import Image from "next/image";
import { productCategory, productData } from "@/app/_lib/data";
import Product_card from "../Common/cards/ProductCard";
function ProductsDetail() {
  return (
    <div className="border-box grid grid-cols-12 gap-4 h-full p-4">
      <div className="col-span-6 h-full grid grid-cols-6 gap-4 content-start">
        <div
          className="border-box col-span-full min-h-28 p-4 flex flex-row justify-start items-start bg-neutral-50 rounded-xl cursor-pointer
            hover:bg-green-100"
        >
          <Image src={flicker} alt="SVG" />
          <div className="flex flex-col items-start justify-start text-sm">
            <h2 className="font-semibold text-base mx-2 mb-3 text-stone-700 tracking-wider">
              Product Overview
            </h2>
            <p className="font-medium text-stone-500 mx-2 text-xs">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore
            </p>
          </div>
        </div>
        {productData.map((el, index) => {
          return (
            <Product_card title={el.title} content={el.content} key={index} />
          );
        })}
      </div>
      <div className="col-span-6 h-full grid grid-cols-6 gap-4">
        <ul className="col-span-2 h-full flex flex-col justify-stretch items-stretch gap-4">
          <h1 className="h-12 flex justify-center items-center font-semibold tracking-wider text-stone-500">
            INDUSTRIES
          </h1>
          {productCategory["industries"].map((el, index) => {
            return (
              <li
                className="h-12 flex justify-center items-center font-semibold tracking-wide text-stone-700 cursor-pointer
               hover:bg-green-50 rounded-md text-xs"
                key={index}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
        <ul className="col-span-2 h-full flex flex-col justify-stretch items-stretch gap-4">
          <h1 className="h-12 flex justify-center items-center font-semibold tracking-wider text-stone-500">
            ROLES
          </h1>
          {productCategory["roles"].map((el, index) => {
            return (
              <li
                className="h-12 flex justify-center items-center font-semibold tracking-wide text-stone-700 cursor-pointer
               hover:bg-green-50 rounded-md text-xs"
                key={index}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
        <ul className="col-span-2 h-full flex flex-col justify-stretch items-stretch gap-4">
          <h1 className="h-12 flex justify-center items-center font-semibold tracking-wider text-stone-500">
            USE CASES
          </h1>
          {productCategory["use_cases"].map((el, index) => {
            return (
              <li
                className="h-12 flex justify-center items-center font-semibold tracking-wide text-stone-700 cursor-pointer
               hover:bg-green-50 rounded-md text-xs"
                key={index}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductsDetail;
