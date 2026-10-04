export default function Footer() {
  return (
    <footer className="mt-[60px] flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="text-[18px] font-bold">Emmanuel Okeibunor</h4>
          <p className="text-[18px]">Software Engineer</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li>X(twitter)</li>
          <li>Github</li>
          <li>Linkedln</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="bottom border-t py-8 w-full text-center border-[#383838]">
        © Okeibunor Emmanuel {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
