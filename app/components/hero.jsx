import { Mail, BriefcaseBusiness } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="mt-[100px]">
      <h1 className="text-[40px]/12 font-extrabold capitalize">
        Jonathan Ohwevwo,
        <br /> <span className="text-[#FAB12F]">Software Engineer</span>
      </h1>
      <p className="text-xl mt-[20px]">
        A dedicated and skilled software engineer with 4-5 years of professional
        experience, specializing in both frontend and backend development. I
        work closely with project teams to develop software for web and mobile
        platforms that align with both business objectives and user needs.
      </p>

      <div className="mt-[40px] mx-auto max-w-[350px]">
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
