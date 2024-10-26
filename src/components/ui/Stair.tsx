import { motion } from "framer-motion";
const stairAnimation = {
  initial: { top: "0%" },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reverseIndex = (index: number) => {
  return 6 - index - 1;
};
const Stair = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="h-full w-full bg-white relative "
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
        />
      ))}
    </>
  );
};

export default Stair;
