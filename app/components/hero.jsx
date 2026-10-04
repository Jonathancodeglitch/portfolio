import { Mail, BriefcaseBusiness } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="mt-[100px] sm:mt-[120px] lg:mt-[150px] flex flex-col gap-4 sm:items-center sm:mx-auto sm:justify-center max-w-[600px] ">
      <h1 className="text-[40px]/14 font-extrabold capitalize lg:text-[48px]">
        Jonathan Ohwevwo,
        <br /> <span className="text-[#FAB12F]">Software Engineer</span>
      </h1>
      <p className="text-xl sm:text-center">
        A dedicated and skilled software engineer with 4-5 years of professional
        experience, specializing in both frontend and backend development. I
        work closely with project teams to develop software for web and mobile
        platforms that align with both business objectives and user needs.
      </p>

      <div className="w-full mx-auto max-w-[350px] lg:flex lg:gap-3 lg:mt-[40px]">
        <button className="flex items-center justify-center gap-2 text-center w-full bg-[#1A1A1A] py-4 mt-4 rounded-md border border-[#383838]">
          <span>Contact me</span> <Mail size={20} color="#FAB12F" />
        </button>
        <button
          className="flex items-center justify-center gap-2 text-center w-full bg-[#1A1A1A] py-4 mt-4 rounded-md border
          border-[#383838]"
        >
          <span>See my works</span>
          <BriefcaseBusiness size={20} color="#FAB12F" />
        </button>
      </div>
    </section>
  );
}
