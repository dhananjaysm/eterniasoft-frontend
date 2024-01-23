"use client";
import Navbar_1 from "@/components/Navbar-1";
import MainNavDetail from "@/components/Navbar-Details.tsx/Main";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
export default function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const navitem = searchParams.get("navitem");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar_1 />
      </Suspense>
      <div className="w-screen relative mt-10">
        <div className="absolute">{children}</div>
        <div
          className={`h-screen w-screen z-9 ${
            !navitem ? "hidden" : "absolute"
          }`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <MainNavDetail />
          </Suspense>
        </div>
      </div>
    </>
  );
}
