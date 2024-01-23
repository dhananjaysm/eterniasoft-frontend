import { LoginForm } from "@/components/Auth/Login";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="w-screen h-screen bg-neutral-100 flex justify-center items-center">
      <div className="border-box px-12 py-1 h-4/5 w-1/3 rounded bg-white flex flex-col justify-start items-stretch">
        <div className="relative ml-auto text-stone-600">
          Don't have an account?
          <span className="text-blue">
            <Link href="/register"> Signup now!</Link>
          </span>
        </div>
        <div className="py-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
