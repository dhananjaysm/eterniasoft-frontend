"use client";
import Link from "next/link";
import React from "react";
import Button_secondary from "../Buttons/button-secondary-purple";
import Button_secondary_purple2 from "../Buttons/button_secondary_purple2";
import Button_secondary_sky from "../Buttons/button_secondary_sky";

function PricingCard({ text, color }: { text: string; color: string }) {
  function getRightButton() {
    switch (color) {
      case "purple":
        return <Button_secondary text={text} />;
      case "purple2":
        return <Button_secondary_purple2 text={text} />;
      case "sky":
        return <Button_secondary_sky text={text} />;
      default:
        return <></>;
    }
  }
  return (
    <div
      className="flex flex-col justify-start items-center border-box px-4 py-2 border-2
    rounded border-neutral-300 max-w-xs"
    >
      <h2 className="text-xl font-semibold my-2 text-stone-800">
        Team Advantage
      </h2>
      <h1 className="text-2xl font-semibold my-2 text-stone-700 ">
        RS 1,550{" "}
        <span className="text-xl font-semibold text-stone-500">
          /user/month
        </span>
      </h1>
      <p className="text-xs text-stone-600 my-2">
        Starting at 3 users, billed annually
      </p>

      <Link href="#">
        {getRightButton()}
        {/* <Button_secondary text={text} /> */}
      </Link>
      <ul className="list-disc list-outside flex flex-col items-start px-4 text-sm text-stone-600 leading-6">
        <li className="my-1">
          Survey sharing with fine control over who can view and edit
        </li>
        <li className="my-1">Gather comments all in one place</li>
        <li className="my-1">
          {" "}
          Let team members analyze, filter, and export results
        </li>
        <li className="my-1">
          {" "}
          Survey sharing with fine control over who can view and edit
        </li>
        <li className="my-1">Gather comments all in one place</li>
        <li className="my-1">
          {" "}
          Let team members analyze, filter, and export results
        </li>
        <li className="my-1">
          {" "}
          Survey sharing with fine control over who can view and edit
        </li>
        <li className="my-1">Gather comments all in one place</li>
        <li className="my-1">
          {" "}
          Let team members analyze, filter, and export results
        </li>
      </ul>
    </div>
  );
}

export default PricingCard;
