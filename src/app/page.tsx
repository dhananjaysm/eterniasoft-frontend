import Button_primary_Green from "@/components/Common/Buttons/button-primary-green";
import Navbar_1 from "@/components/Navbar-1";
import MainNavDetail from "@/components/Navbar-Details.tsx/Main";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar_1 />
      </Suspense>
      <div className="w-screen mt-16 relative flex justify-center ">
        <div className="relative flex flex-col justify-center items-center top-40 w-full ">
          <h1 className="absolute font-bold text-3xl mb-4 h-12 overflow-hidden animate_viewInSteps text-center">
            Are my customers actually satisfied?|
          </h1>
          <h1 className="absolute font-bold text-3xl mb-4 h-12 overflow-hidden  animate_viewInSteps_alternate text-center ">
            Do people like attending my events?|
          </h1>
          <div className="mt-20">
            <Button_primary_Green text="Get Started" />
          </div>
        </div>
        <div className="absolute h-screen w-screen z-9 ">
          <Suspense fallback={<div>Loading...</div>}>
            <MainNavDetail />
          </Suspense>
        </div>
      </div>
    </>
  );
}
