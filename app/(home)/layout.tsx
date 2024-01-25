"use client";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";
import { AuthProvider } from "../context/AuthContext";
import { SubsProvider } from "../context/SubsContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ApolloProvider client={client}>
          <AuthProvider>
            <SubsProvider>
              <ThemeProvider
                enableSystem={false}
                attribute="class"
                defaultTheme="light"
              >
                <div className="flex h-screen overflow-hidden">
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <HomeHeader
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                    <main>
                      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {children}
                      </div>
                    </main>
                  </div>
                </div>
              </ThemeProvider>
            </SubsProvider>
          </AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
