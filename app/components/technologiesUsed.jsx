"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiWordpress,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

// Brand colours; black brand marks (Express, GitHub, Vercel) use white so they show on the dark background
const technologies = [
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiPython, color: "#3776AB", label: "Python" },
  { Icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  { Icon: SiExpress, color: "#FFFFFF", label: "Express" },
  { Icon: SiPostgresql, color: "#4169E1", label: "PostgreSQL" },
  { Icon: TbSql, color: "#FAB12F", label: "SQL" },
  { Icon: SiWordpress, color: "#21759B", label: "WordPress" },
  { Icon: SiGithub, color: "#FFFFFF", label: "GitHub" },
  { Icon: SiVercel, color: "#FFFFFF", label: "Vercel" },
];

export default function TechnologiesUsedSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      delay: 1000,
      jump: false,
      stopOnInteraction: false,
      speed: 1,
      direction: "backward",
    }),
  ]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoScroll?.play();
  }, [emblaApi]);

  return (
    <div className="pt-[120px]">
      <h4 className="text-center text-[20px] uppercase font-bold">
        Technologies i use
      </h4>
      <div className="embla mt-[50px]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container mt-15">
            {technologies.map(({ Icon, color, label }) => {
              return (
                <div key={label} className="embla__slide">
                  <div className="flex h-full w-full flex-col items-center justify-center border border-[#383838] rounded-md">
                    <Icon size={48} color={color} aria-hidden="true" />
                    <span className="text-sm mt-2">{label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
