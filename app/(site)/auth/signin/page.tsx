"use client";
import { useAuth } from "@/app/context/AuthContext";
import Signin from "@/components/Auth/SignIn";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Login Page - Solid SaaS Boilerplate",
//   description: "This is Login page for Startup Pro",
//   // other metadata
// };

const SigninPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {  
      router.push("/home"); // Redirect to /home if the user is authenticated
    }
  }, [isAuthenticated, router]);
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
