import { MoveUpRight, Dot } from "lucide-react";
import LoopVideo from "@/app/components/loopVideo";

const projects = [
  {
    id: 1,
    title: "Jaye Foods",
    description:
      "Jaye Foods is a leading exporter of food and drink products, exporting an exceptional product range to businesses in the UK and in the process of expansion across the globe.",
    status: "live",
    link: "https://www.jayefoods.com",
    video: "/videos/jaiye-food-vids.mp4",
    poster: "/videos/jaiye-food-poster.png",
  },
  {
    id: 2,
    title: "DMSL",
    description:
      "DMSL (digital and media services) is a digital marketing agency that provides modern digital solutions to help businesses grow.",
    status: "live",
    link: "https://www.digitalandmediaservices.com",
    video: "/videos/dmsl-vids.mp4",
    poster: "/videos/dmsl-poster.png",
  },
  {
    id: 3,
    title: "Print Haven Live",
    description:
      "Print Haven Live is a real-time product customization web platform built with Next.js that transforms events into interactive experiences by  enabling event guests to  design and take home personalized products (i.e t-shirt) in real time.",
    status: "in progress",
    video: "/videos/print-haven-vid.mp4",
  },
];

const statusStyles = {
  live: "bg-[#1A291F] text-[#27B853]",
  "in progress": "bg-[#2B2414] text-[#FAB12F]",
  "coming soon": "bg-[#1F1F2B] text-[#8B8BFF]",
};

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 mt-[40px] sm:mt-[60px] lg:mt-[100px] capitalize font-bold"
    >
      <h1 className="text-3xl sm:text-[40px] lg:text-[48px] border-b border-[#383838] py-2">
        Selected works
      </h1>

      <div className="mt-6 lg:mt-10 flex flex-col gap-6 lg:gap-8">
        {projects.map(
          ({ id, title, description, status, link, video, poster }) => (
            <article
              key={id}
              className="w-full flex flex-col md:flex-row gap-5 md:gap-8 p-4 sm:p-6 lg:p-8 rounded-xl bg-[#1A1A1A] border border-[#383838]"
            >
              {/* media: 16:9 when stacked, stretches to text height from md up */}
              <div className="relative w-full aspect-video md:aspect-auto md:w-[42%] md:min-h-[240px] md:shrink-0 overflow-hidden rounded-xl">
                {video ? (
                  <LoopVideo
                    src={video}
                    poster={poster}
                    className="absolute inset-0 h-full w-full object-contain rounded-xl"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-dashed border-[#383838] px-4 text-center text-sm font-normal normal-case text-gray-500">
                    Preview coming soon
                  </div>
                )}
              </div>

              {/* desc area */}
              <div className="flex min-w-0 flex-1 flex-col items-start">
                <span
                  className={`flex items-center justify-center py-1.5 px-3 text-sm sm:text-base rounded uppercase w-fit ${
                    statusStyles[status] ?? statusStyles.live
                  }`}
                >
                  <span>{status}</span>
                  <Dot />
                </span>

                <h3 className="font-bold text-lg sm:text-xl mt-3 break-words">
                  {title}
                </h3>

                <p className="text-base sm:text-lg mt-3 sm:mt-4 font-normal normal-case">
                  {description}
                </p>

                {status !== "coming soon" && link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full sm:w-fit flex items-center justify-center sm:justify-start gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838] transition hover:bg-[#262626]"
                  >
                    <span>View Project</span> <MoveUpRight />
                  </a>
                ) : (
                  <p className="mt-6 text-sm font-normal normal-case text-gray-500">
                    Launching soon
                  </p>
                )}
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
