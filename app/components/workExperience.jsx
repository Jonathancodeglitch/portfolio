import Image from "next/image";

const experiences = [
  {
    id: 1,
    company: "Brinicon Ltd",
    role: "Full Stack Developer",
    start: "Mar 2022",
    end: "Now",
  },
  {
    id: 2,
    company: "Netwalkers Ng",
    role: "Frontend engineer",
    start: "Apr 2020",
    end: "Oct 2021",
  },
];

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

// "Nov 2026" -> a month number we can do maths with ("Now" = this month)
function toMonthIndex(str) {
  if (!str || str.toLowerCase() === "now") {
    const d = new Date();
    return d.getFullYear() * 12 + d.getMonth();
  }
  const [month, year] = str.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month.toLowerCase().slice(0, 3));
}

// Adds up all the months worked, without double-counting overlapping jobs
function getTotalMonths(list) {
  const ranges = list
    .map(({ start, end }) => ({
      from: toMonthIndex(start),
      to: toMonthIndex(end),
    }))
    .filter((r) => r.to >= r.from) // ignore entries that haven't started yet
    .sort((a, b) => a.from - b.from);

  let total = 0;
  let curFrom = null;
  let curTo = null;

  for (const r of ranges) {
    if (curTo === null || r.from > curTo + 1) {
      if (curTo !== null) total += curTo - curFrom + 1;
      curFrom = r.from;
      curTo = r.to;
    } else {
      curTo = Math.max(curTo, r.to); // overlapping or back-to-back, merge them
    }
  }
  if (curTo !== null) total += curTo - curFrom + 1;

  return total;
}

function formatExperience(months) {
  if (months < 12)
    return `${months} Month${months === 1 ? "" : "s"} Experience`;
  const years = Math.floor(months / 12);
  const extra = months % 12 > 0 ? "+" : "";
  return `${years}${extra} Year${years === 1 && !extra ? "" : "s"} Experience`;
}
export default function WorkExperienceSection() {
  const totalExperience = formatExperience(getTotalMonths(experiences));
  return (
    <section className="mt-[40px] sm:mt-[60px]">
      <h1 className="text-[40px] border-b border-[#383838] py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <span className="font-bold">Work Experience</span>
        <span className="text-[16px] font-semibold">{totalExperience}</span>
      </h1>

      <div className="mt-[20px]">
        {experiences.map(({ id, company, role, start, end, logo }) => (
          <div
            key={id}
            className="border-b border-[#383838] py-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-3">
              {logo ? (
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-md border border-[#383838] bg-white object-contain p-1"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#383838] bg-[#1A1A1A] font-bold text-[#FAB12F]"
                >
                  {company.charAt(0)}
                </div>
              )}

              <div>
                <h4 className="font-bold">{company}</h4>
                <p className="font-bold">{role}</p>
              </div>
            </div>

            <div className="text-[18px]">
              <span>{start}</span> - <span>{end}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
