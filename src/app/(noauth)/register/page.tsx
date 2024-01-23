import { LoginForm } from "@/components/Auth/Login";
import { RegisterForm } from "@/components/Auth/Register";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="w-screen h-auto py-12 bg-neutral-100 flex justify-center items-center">
      <div className="border-box px-12 py-1 h-4/5 w-1/3 rounded bg-white flex flex-col justify-start items-stretch">
        <div className="relative ml-auto text-stone-600">
          Already have an account?
          <span className="text-blue">
            <Link href="/login"> Login</Link>
          </span>
        </div>
        <div className="pt-12 pb-20">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
