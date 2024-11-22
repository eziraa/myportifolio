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

      </motion.div>
    </div>
  );
};

export default Photo;
