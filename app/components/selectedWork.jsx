import { MoveUpRight, Dot } from "lucide-react";

export default function SelectedWork() {
  return (
    <section className="mt-[40px] sm:mt-[60px] lg:mt-[100px]  capitalize font-bold">
      <h1 className="text-[40px] lg:text-[48px] border-b border-[#383838] py-2">
        Selected works
      </h1>
      <div className="mt-[30px] lg:mt-[40px] lg w-full flex flex-col sm:flex-row p-4 gap-8 sm:p-8 rounded-xl bg-[#1A1A1A] border border-[#383838]">
        <div className="w-full h-[200px] flex items-center justify-center rounded-xl">
          preview work img
        </div>
        {/* desc area */}
        <div>
          <span className="flex items-center justify-center bg-[#1A291F] text-[#27B853] status py-2 px-3 rounded uppercase w-fit h-fit">
            <span>live</span>
            <Dot />
          </span>

          <h3 className="capitalize font-bold text-[20px] mt-[12px]">
            Pertinence Properties Limited
          </h3>
          <p className="text-lg mt-[15px]">
            Pertinence Properties Limited is the ultimate platform for making,
            storing, and multiplying wealth through real estate investments.
            Dive into the diverse offerings, from homes and apartments to land
            banking and beyond.
          </p>
          <button className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]">
            <span>View Project</span> <MoveUpRight />
          </button>
        </div>
      </div>
      <div className="mt-[30px] w-full flex flex-col sm:flex-row p-4 gap-8 sm:p-8 rounded-xl bg-[#1A1A1A] border border-[#383838]">
        <div className="w-full h-[200px] flex items-center justify-center rounded-xl">
          preview work img
        </div>
        {/* desc area */}
        <div>
          <span className="flex items-center justify-center bg-[#1A291F] text-[#27B853] status py-2 px-3 rounded uppercase w-fit h-fit">
            <span>live</span>
            <Dot />
          </span>

          <h3 className="capitalize font-bold text-[20px] mt-[12px]">
            Pertinence Properties Limited
          </h3>
          <p className="text-lg mt-[15px]">
            Pertinence Properties Limited is the ultimate platform for making,
            storing, and multiplying wealth through real estate investments.
            Dive into the diverse offerings, from homes and apartments to land
            banking and beyond.
          </p>
          <button className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]">
            <span>View Project</span> <MoveUpRight />
          </button>
        </div>
      </div>
      <div className="mt-[30px] w-full flex flex-col sm:flex-row p-4 gap-8 sm:p-8 rounded-xl bg-[#1A1A1A] border border-[#383838]">
        <div className="w-full h-[200px] flex items-center justify-center rounded-xl">
          preview work img
        </div>
        {/* desc area */}
        <div>
          <span className="flex items-center justify-center bg-[#1A291F] text-[#27B853] status py-2 px-3 rounded uppercase w-fit h-fit">
            <span>live</span>
            <Dot />
          </span>

          <h3 className="capitalize font-bold text-[20px] mt-[12px]">
            Pertinence Properties Limited
          </h3>
          <p className="text-lg mt-[15px]">
            Pertinence Properties Limited is the ultimate platform for making,
            storing, and multiplying wealth through real estate investments.
            Dive into the diverse offerings, from homes and apartments to land
            banking and beyond.
          </p>
          <button className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]">
            <span>View Project</span> <MoveUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}
