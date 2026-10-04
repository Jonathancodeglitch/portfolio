import { Mail } from "lucide-react";
export default function ContactMeSection() {
  return (
    <section className="text-center mt-[50px] flex flex-col items-center gap-4">
      <h1 className="text-[40px] font-bold">Ready to create magic?</h1>
      <p className="text-[18px]">
        Let's get the ball rolling, let me know your plans and vision about this
        project, most likely you would find me competent to deliver above your
        expectations.
      </p>
      <button className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]">
        <span>Contact Me </span> <Mail />
      </button>
    </section>
  );
}
