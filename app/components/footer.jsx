export default function Footer() {
  return (
    <footer className="mt-[60px] flex flex-col gap-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div>
          <h4 className="text-[18px] lg:text-[20px] font-bold">
            Jonathan Ohwevwo
          </h4>
          <p className="text-[18px] lg:text-[20px]">Software Engineer</p>
        </div>
        <ul className="flex flex-col gap-4">
          <a href="https://x.com/_codeGlitch">X(twitter)</a>
          <a href="https://github.com/Jonathancodeglitch">Github</a>
          <a href="www.linkedin.com/in/jonathan-ohwevwo-9a30a826b">Linkedln</a>
          <a href="https://www.instagram.com/_jonathan_kendrick?stkn=NHJzcjl0OG82c3pt">
            Instagram
          </a>
        </ul>
      </div>
      <div className="bottom border-t py-8 w-full text-center border-[#383838]">
        © Jonathan Ohwevwo {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
