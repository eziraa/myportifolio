"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeInOut",
            },
          }}
          className="w-[298px] h-[298px] xl:w-[320px] mt-4 xl:h-[320px]  mix-blend-lighten absolute "
        >
          <Image
            src="/assets/photo.png"
            alt="Ezira Yallew"
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </motion.div>
        <motion.svg
          className="pt-2 w-[280px] h-[280px] xl:w-[320px] xl:h-[320px] "
          fill="transparent"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={350}
            cy={353}
            r={350}
            className="mt-4"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 92", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
