"use client";
import Conatiner from "@/app/components/conatainer";
import { X, Menu, LineDotLeftHorizontal } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

export default function Navigation() {
  const [menu, setMenu] = useState(false);
  const [menuNavigationHeight, setMenuNavigationHeight] = useState(null);
  const menuNavigationRef = useRef(null);

  function handleMenuToggle() {
    setMenu(!menu);
  }
  return (
    <header className="z-20 flex justify-between items-center py-[30px] fixed top-0 left-0 right-0 bg-black">
      <Conatiner>
        <div className="lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* Logo + hamburger (left column) */}
          <div className="flex justify-between items-center">
            <div className="capitalize flex items-center gap-1.5">
              <LineDotLeftHorizontal color="#FAB12F" size={20} />
              <span className="text-[#FAB12F] text-[18px]">
                Available for work
              </span>
            </div>

            <button
              onClick={handleMenuToggle}
              className="flex items-center justify-center lg:hidden"
            >
              <X className="hidden" />
              <Menu />
            </button>
          </div>

          {/* Navigation wrapper (collapses on mobile, flattened on lg) */}
          <div
            style={{
              height: menu ? menuNavigationRef.current?.scrollHeight + "px" : 0,
              marginTop: menu ? "20px" : 0,
            }}
            className="overflow-hidden transition-all lg:contents"
          >
            <div ref={menuNavigationRef} className="lg:contents">
              {/* Links (center column) */}
              <ul className="ml-[15px] lg:text-[18px] lg:ml-0 flex flex-col gap-4 lg:flex-row lg:gap-8">
                <Link href="#">Home</Link>
                <Link href="#">Projects</Link>
                <Link href="#">About</Link>
                <Link href="#">Resume</Link>
              </ul>

              {/* Contact button (right column) */}
              <Link
                href="#"
                className="inline-block text-center lg:text-[18px] cursor-pointer w-full lg:w-fit lg:justify-self-end bg-[#1A1A1A] py-3 px-5 mt-5 lg:mt-0 rounded-md border border-[#383838]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Conatiner>
    </header>
  );
}
