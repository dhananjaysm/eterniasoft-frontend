'use client'
import { GET_PLAN_QUERY } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
const params = useParams();

//get product id from params
const planId = params.planId;
const {data,loading,error} = useQuery(GET_PLAN_QUERY,{
    variables:{
        planId:planId
    },
    skip:!planId
})
if(loading)  return <>Loading...</>

const plan = data?.findPlan;
  return (
    <main>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="mb-1.5 text-title-md2 font-bold text-black dark:text-white">
            Explore <span className="text-blue-700">{plan?.name}</span> Plan
          </h2>
          {/* <p className="font-medium">Latest social statistics</p> */}
        </div>
      </div>
      
    </main>
  );
};

export default ProductPage;
