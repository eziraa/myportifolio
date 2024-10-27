"use client";
import CountUp from "react-countup";
const stats = [
  {
    num: "2",
    label: "Years of Experience",
  },
  {
    num: "10",
    label: "Projects Completed",
  },
  {
    num: "8",
    label: "Technologies mastered",
  },
  {
    num: "4900",
    label: "Code Commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ num, label }, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={parseInt(num)}
                duration={5}
                suffix="+"
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/60`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
