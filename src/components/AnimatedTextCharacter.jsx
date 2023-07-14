/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export const AnimatedTextCharacter = ({
  text,
  staggerChildren,
  delayChildren,
}) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren * i,
      },
    }),
  };

  // Variants for each letter
  const child = {
    hidden: {
      y: 200,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      className="flex overflow-hidden cursor-default"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.div
          variants={child}
          key={index}
          whileHover={{ scale: 1.1 }}
          className=" bg-gradient-to-r from-primary to-secondary bg-clip-text"
        >
          <motion.span variants={child} className="text-transparent">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};
