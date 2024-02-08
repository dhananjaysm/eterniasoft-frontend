import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import SearchHero from "@/components/Hero/SearchHero";

export const metadata: Metadata = {
  title: "EterniaSoft",
  description: "Empowering Your Workflow, Enhancing Your Success",
  // other metadata
};

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <SearchHero/>
      {/* <Brands /> */}
      <Feature />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      <Integration />
      <CTA />
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      <Pricing />
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
