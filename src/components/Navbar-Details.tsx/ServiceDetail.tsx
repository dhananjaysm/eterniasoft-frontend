import { serviceData } from "@/app/_lib/data";
import React from "react";
import Product_card from "../Common/cards/ProductCard";

function ServiceDetail() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {serviceData.map((el, index) => {
        return (
          <Product_card title={el.title} content={el.content} key={index} />
        );
      })}
    </div>
  );
}

export default ServiceDetail;
