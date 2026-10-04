export default function AboutSection() {
  return (
    <section className="flex flex-col gap-16 items-center justify-center">
      {/* about me desc */}
      <div className="mt-[40px] flex flex-col gap-8">
        <h1 className="text-[40px] border-b border-[#383838] py-2">About me</h1>
        <p className="text-[20px] font-semibold">
          Hi there! I'm Jonathan Ohwevwo, a highly proficient Software Engineer
          based in Lagos, Nigeria. I specialise in creating software for web and
          mobile platforms. Over the years, I've played a key role in building
          solutions for users and meeting business needs across various
          industries, including B2B, B2C, real estate, fintech, and social
          media, among others.
        </p>

        <p className="text-[20px] font-semibold">
          Hi there! I'm Jonathan Ohwevwo, a highly proficient Software Engineer
          based in Lagos, Nigeria. I specialise in creating software for web and
          mobile platforms. Over the years, I've played a key role in building
          solutions for users and meeting business needs across various
          industries, including B2B, B2C, real estate, fintech, and social
          media, among others.
        </p>
        {/* action btn */}
        <div className="flex items-center gap-4">
          <button className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]">
            My Resume
          </button>
          <button className="mt-[25px] w-fit flex items-center gap-4 font-bold rounded-xl py-3 px-4 sm:py-4 sm:px-8 border border-[#383838]">
            Hire me
          </button>
        </div>
      </div>
      {/* my image */}
      <div className="w-[80%] h-[50vh] border-[#ffff] border rounded-br-xl relative">
          <div className="w-full h-[50vh] border-[#ffff] border  absolute rounded-tl-xl top-[-32px] left-[-32px]">

          </div>
      </div>
    </section>
  );
}
