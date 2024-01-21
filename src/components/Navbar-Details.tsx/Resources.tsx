import { resourceData } from "@/app/_lib/data";
import React from "react";
import Product_card from "../Common/cards/ProductCard";

function Resources() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {resourceData.map((el, index) => {
        return (
          <Product_card title={el.title} content={el.content} key={index} />
        );
      })}
    </div>
  );
}

export default Resources;
