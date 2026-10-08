"use client";
import Conatiner from "@/app/components/conatainer";
import { X, Menu, LineDotLeftHorizontal } from "lucide-react";
import { useState, useRef } from "react";
import { scrollToSection } from "@/app/components/utility";
import Link from "next/link";

export default function Navigation() {
  const [menu, setMenu] = useState(false);

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
              {menu && <X />}
              {!menu && <Menu />}
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
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("/");
                    setMenu(false);
                  }}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                    setMenu(false);
                  }}
                  href="/#projects"
                >
                  Projects
                </Link>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                    setMenu(false);
                  }}
                  href="/#about"
                >
                  About
                </Link>
                <a
                  href="https://drive.google.com/file/d/1qwPiIrAFUZsrrAp5XVkc8CpkSAw2O3cQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </ul>

              {/* Contact button (right column) */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ohwevwojonathan@gmail.com&su=Project%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center lg:text-[18px] cursor-pointer w-full lg:w-fit lg:justify-self-end bg-[#1A1A1A] py-3 px-5 mt-5 lg:mt-0 rounded-md border border-[#383838]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Conatiner>
    </header>
  );
}
