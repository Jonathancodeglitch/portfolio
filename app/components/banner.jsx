import { Galaxy } from "lucide-react";

const words = [
  "Software Engineer",
  "Creativity",
  "Problem Solver",
  "Performance",
  "Clean Code",
];

export default function Banner() {
  return (
    <div className="group overflow-hidden bg-[#111] py-6 my-[40px] lg:my-[60px]">
      <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]">
        {words.map((word, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-5xl font-extrabold uppercase text-neutral-500">
              {word}
            </span>
            <Galaxy color="#F2A900" size={64} />
          </div>
        ))}
      </div>
    </div>
  );
}
