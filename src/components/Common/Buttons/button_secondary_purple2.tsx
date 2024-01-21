"use client";
import React from "react";

function Button_secondary_purple2({ text }: { text: string }) {
  const buttonClass = `p-3 px-16 text-sm font-semibold flex items-center justify-center bg-purple2-600 rounded hover:bg-purple2-700 transition ease-in-out delay-150 text-white my-4 cursor-pointer`;
  console.log("button class", buttonClass);
  return <button className={buttonClass}>{text}</button>;
}

export default Button_secondary_purple2;
