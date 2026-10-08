"use client";

import { Mail, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "@/app/components/utility";

const buttonStyles =
  "flex items-center justify-center gap-2 text-center w-full bg-[#1A1A1A] py-4 mt-4 rounded-md border border-[#383838]";

export default function HeroSection() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section className="mt-[100px] sm:mt-[120px] lg:mt-[150px] flex flex-col gap-4 sm:items-center sm:mx-auto sm:justify-center max-w-[600px]">
      <h1 className="text-[40px]/14 font-extrabold capitalize sm:text-center lg:text-[48px]">
        Jonathan Ohwevwo,
        <br /> <span className="text-[#FAB12F]">Software Engineer</span>
      </h1>
      <p className="text-xl sm:text-center">
        A software engineer who builds fast, scalable applications with clean,
        maintainable code. I enjoy untangling complex problems and turning them
        into products that are reliable and easy to grow.
      </p>

      <div className="w-full mx-auto max-w-[350px] lg:flex lg:gap-3 lg:mt-[40px]">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ohwevwojonathan@gmail.com&su=Project%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles}
        >
          <span>Contact me</span>
          <Mail size={20} color="#FAB12F" />
        </a>

        <Link
          href="#projects"
          onClick={(e) => handleScroll(e, "projects")}
          className={buttonStyles}
        >
          <span>See my works</span>
          <BriefcaseBusiness size={20} color="#FAB12F" />
        </Link>
      </div>
    </section>
  );
}
