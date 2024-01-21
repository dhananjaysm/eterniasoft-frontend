import Navbar_1 from "@/components/Navbar-1";
import MainNavDetail from "@/components/Navbar-Details.tsx/Main";
import { Suspense } from "react";

export default function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar_1 />
      </Suspense>
      <div className="w-screen relative mt-20">
        <div className="absolute">{children}</div>
        <div className="absolute h-screen w-screen z-9 ">
          <Suspense fallback={<div>Loading...</div>}>
            <MainNavDetail />
          </Suspense>
        </div>
      </div>
    </>
  );
}
