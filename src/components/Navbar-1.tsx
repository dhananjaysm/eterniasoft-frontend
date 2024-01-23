"use client";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import Button_primary from "./Common/Buttons/button-primary";
import Button_borderless from "./Common/Buttons/button-borderless";
import { useSearchParams } from "next/navigation";
function NavItems({
  value,
  isPageNew = false,
}: {
  value: string;
  isPageNew?: boolean;
}) {
  const searchParams = useSearchParams();
  const navitem = searchParams.get("navitem");
  return (
    <Link
      href={
        isPageNew
          ? `/${value.toLowerCase()}`
          : `?navitem=${navitem == value ? "" : value}`
      }
    >
      <li
        className={`font-semibold tracking-wider text-sm mx-2 text-stone-900 flex item-center justify-center h-6  ${
          navitem == value ? "border-b-2 border-green-300" : ""
        }`}
      >
        {value}
        <p
          className={`transition-all duration-300 ${
            navitem == value ? "rotate-180" : ""
          }`}
        >
          {isPageNew ? "" : <KeyboardArrowDownIcon fontSize="small" />}
        </p>
      </li>
    </Link>
  );
}

function Navbar_1() {
  return (
    <>
      <div className="border-box h-16 bg-white w-screen sm:hidden md:flex flex-row items-center fixed top-0 z-10 px-4">
        <ul className="flex flex-row mx-1">
          <Link href="/">
            <p className="font-semibold tracking-widest mx-4 text-stone-800">
              Eternia Windows
            </p>
          </Link>
          <NavItems value="Products" />
          <NavItems value="Services" />
          <NavItems value="Pricing" isPageNew={true} />
          <NavItems value="Enterprise" isPageNew={true} />
          <NavItems value="Resources" />
        </ul>
        <ul className="ml-auto flex flex-row mr-4 items-center justify-center">
          <li className="mx-2">
            <Link href="/contact_sales">
              <Button_borderless text="Contact Sales" />
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/login">
              <Button_borderless text="Login" />
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/register">
              <Button_primary text="Signup Free" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar_1;
