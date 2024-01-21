import Navbar_1 from "@/components/Navbar-1";
import MainNavDetail from "@/components/Navbar-Details.tsx/Main";

export default function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar_1 />
      <div className="w-screen relative mt-20">
        <div className="absolute">{children}</div>
        <div className="absolute h-screen w-screen z-9 ">
          <MainNavDetail />
        </div>
      </div>
    </>
  );
}
