"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

const technologies = [
  { image: `/image/react.png`, label: "React" },
  {
    image: "/image/react.png",
    label: "Tailwind CSS",
  },
  { image: `/image/javascript_js.png`, label: "JavaScript" },
  { image: `/image/typescript_logo.svg`, label: "TypeScript" },
  { image: `/image/python-logo-notext.svg.webp`, label: "Python" },
  { image: `/image/node-logo.png`, label: "Node.js" },
  { image: `/image/express-logo.png`, label: "Express" },
  { image: `/image/postgres-logo.png`, label: "PostgreSQL" },
  { image: "/image/sql.png", label: "SQL" },
  { image: `/image/wordpress-logo.png`, label: "WordPress" },
  { image: `/image/github.png`, label: "GitHub" },
  { image: `/image/vercel.png`, label: "Vercel" },
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
            {technologies.map((technology) => {
              return (
                <div key={technology.label} className="embla__slide">
                  <div
                    className="flex h-full w-full flex-col items-center justify-center  border border-[#383838]   rounded-md w-full  "
                  >
                    <Image
                      width={48}
                      height={48}
                      src={technology.image}
                      alt={technology.label + " logo"}
                    />
                    <span className="text-sm mt-2">{technology.label}</span>
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
