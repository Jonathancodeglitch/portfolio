import Image from "next/image";
import Link from "next/link";
export default function AboutSection() {
  return (
    <section id="about" className="sm:mt-[60px] scroll-mt-28">
      <h1 className="text-[40px] font-bold border-b border-[#383838] py-2">
        About me
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-16 items-center justify-center mt-[40px]">
        {/* about me desc */}
        <div className=" flex flex-col gap-8 lg:w-[50%]">
          <p className="text-[20px] font-semibold">
            Hi there! I'm Jonathan. Let me tell you a bit about how it all
            started, From the moment I made my first javascript game (rock paper
            scissor) with the prompt method and the web console tool I knew I
            was hooked into the word of software development.
          </p>

          <p className="text-[20px] font-semibold">
            I felt sublime like I could bring my imaginations into reality in a
            computer by understanding it and making it understand me, what
            started as a simple javascript game has become a full-fledged
            passion that offers an engaging challenge to continually learn and
            improve my skills in creating high quality code.
          </p>
          {/* action btn */}
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1qwPiIrAFUZsrrAp5XVkc8CpkSAw2O3cQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]"
            >
              My Resume
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ohwevwojonathan@gmail.com&su=Project%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]"
            >
              Hire me
            </a>
          </div>
        </div>
        {/* my image */}
        <div className="lg:w-[40%] w-[80%] h-[50vh] border-[#ffff] border rounded-br-xl relative">
          <Image
            src="https://placehold.co/600x400.png?text=Still+looking+for+a%5Cngood+picture"
            alt="Placeholder portrait"
            width={600}
            height={400}
            className="absolute -top-8 -left-8 h-[50vh] w-full rounded-tl-xl border border-white object-cover"
          />
        </div>
      </div>
    </section>
  );
}
