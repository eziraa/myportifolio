"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    title: "Web Development",
    href: "",
  },
  {
    num: "02",
    title: "App Development",
    href: "",
  },

];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col  justify-center py-12 xl:py-8 ">
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-[60px]"
        >
          {services.map(({ num, title, href }, index) => (
            <div
              className="flex-1 flex flex-col justify-center gap-6 group"
              key={index}
            >
              <div className="w-full flex justify-between items-center ">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                  {num}
                </div>
                <Link
                  href={href}
                  className="w-[45px] h-[45px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 ">
                {title}
              </h2>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
