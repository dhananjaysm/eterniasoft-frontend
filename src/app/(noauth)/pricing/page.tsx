import PricingCard from "@/components/Common/cards/PricingCard";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center justify-start w-screen py-8 px-12">
      <h1 className="text-3xl font-bold">Choose a plan that works for you</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="col-span-1">
          <PricingCard text={"Sign Up"} color={"purple"} />
        </div>
        <div className="col-span-1">
          <PricingCard text={"Sign Up"} color={"purple2"} />
        </div>
        <div className="col-span-1">
          <PricingCard text={"Contact"} color={"sky"} />
        </div>
      </div>
    </div>
  );
}

export default Page;
