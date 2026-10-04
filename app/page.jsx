"use client";
import { X, Menu } from "lucide-react";
import { useState, useRef } from "react";
import HeroSection from "@/app/components/hero";
import TechnologiesUsedSection from "@/app/components/technologiesUsed";
import SelectedWork from "@/app/components/selectedWork";
import WorkExperienceSection from "./components/workExperience";
import AboutSection from "./components/aboutme";
import ContactMeSection from "@/app/components/contactMe";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="bg-[#000000] text-[#fff] min-h-screen">
      <Conatiner>
        <Navigation />
        <HeroSection />
        <TechnologiesUsedSection />
        <SelectedWork />
        <WorkExperienceSection />
        <AboutSection />
        <ContactMeSection />
        <Footer />
      </Conatiner>
    </div>
  );
}

function Conatiner({ children }) {
  return <div className="mx-auto max-w-350 w-[90%]">{children}</div>;
}

function Navigation() {
  const [menu, setMenu] = useState(false);
  const [menuNavigationHeight, setMenuNavigationHeight] = useState(null);
  const menuNavigationRef = useRef(null);

  function handleMenuToggle() {
    setMenu(!menu);
  }
  return (
    <header className="z-20 flex justify-between items-center py-[30px] fixed top-0 left-0 right-0 bg-black">
      <Conatiner>
        <div className="">
          <div className="flex justify-between items-center w-full">
            {/* logo */}
            <div className="uppercase font-bold ">Hey, welcome in! 👋</div>
            {/* handburgur menu */}
            <button
              onClick={handleMenuToggle}
              className="flex items-center justify-center"
            >
              <X className="hidden" />
              <Menu />
            </button>
          </div>

          {/* Navigation */}
          <div
            style={{
              height: menu ? menuNavigationRef.current.scrollHeight + "px" : 0,
              marginTop: menu ? "20px" : 0,
            }}
            className="overflow-hidden transition-all"
          >
            <div ref={menuNavigationRef}>
              <ul className="ml-[15px] flex flex-col gap-2.5">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Cv</li>
              </ul>
              {/* contact btn */}
              <button className="text-center w-full bg-[#1A1A1A] py-3 mt-4 rounded-md border border-[#383838] ">
                Contact
              </button>
            </div>
          </div>
        </div>
      </Conatiner>
    </header>
  );
}
