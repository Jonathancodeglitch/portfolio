export default function WorkExperienceSection() {
  return (
    <section className="mt-[40px] sm:mt-[60px] ">
      <h1 className="text-[40px] border-b border-[#383838] py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <span className="font-bold">Work Experience</span>
        <span className="text-[16px] font-semibold">4+ Years Experience</span>
      </h1>
      {/* experiences */}
      <div className="mt-[20px]">
        {/* experience list */}
        <div className="border-b border-[#383838] py-2 flex flex-col lg:flex-row lg:justify-between">
          <div className="">
            <h4 className="font-bold">Brinicon Ltd</h4>
            <p className="font-bold">Full stack developer</p>
          </div>
          {/* date */}
          <div className="text-[18px]">
            <span>Nov 2026</span> - <span>Now</span>
          </div>
        </div>
      </div>
    </section>
  );
}
