"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import WorkSlideBtns from "@/components/ui/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "Front End",
    title: "Admin dash board",
    description: "Admin dash board using material ui.",
    href: "",
    img: "/assets/work/admin.png",
    tooltipContent: " admin dashboard",
    github: "https://github.com/eziraa/mui-admin-dashboard",
    stack: [
      { name: "React", icon: "/images/react.png" },
      { name: "Materialui", icon: "/images/mui.png" },
      { name: "Tailwind CSS", icon: "/images/tailwindcss.png" },
    ],
  },
  {
    num: "02",
    category: "Full stack",
    title: "Songish",
    description: "Website to mange and listen out musics.",
    href: "",
    img: "/assets/work/songish.png",
    tooltipContent: " Songish",
    github: "https://github.com/eziraa/songish",
    stack: [
      { name: "React", icon: "/images/react.png" },
      { name: "CSS", icon: "/images/css.png" },
      { name: "Redux", icon: "/images/redux.png" },
      { name: "Django", icon: "/images/Django.png" },
    ],
  },

  {
    num: "03",
    category: "Fullstack",
    title: "Payroll",
    description: "Payroll management system to manage employee payroll like deductions , allowances and ovetime and also report .",
    href: "",
    img: "/assets/work/payroll.jpg",
    tooltipContent: " Payroll",
    github: "https://github.com",
    stack: [
      { name: "React", icon: "/images/react.png" },
      { name: "CSS", icon: "/images/css.png" },
      { name: "Redux", icon: "/images/redux.png" },
      { name: "Django", icon: "/images/Django.png" },
    ],
  },
  {
    num: "04",
    category: "Mobile app",
    title: "Tech news app",
    description: "Tech news app for latest tech related news",
    href: "",
    img: "/assets/work/tech.jpg",
    tooltipContent: "Tech news app",
    github: "https://github.com/eziraa/technews",
    stack: [
      { name: "Flutter" },
    ],
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setProject(projects[swiper.activeIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80h] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none  ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className=" text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              <p className="text-white/60 "> {project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.href}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent group-hover:rotate-45" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">See on github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full ">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>
                  <div className="absolute h-full w-full bottom-0 top-0 bg-black/10 z-10">
                    {" "}
                  </div>
                  <div className="  ">
                    <Image
                      src={project.img}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 "
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
