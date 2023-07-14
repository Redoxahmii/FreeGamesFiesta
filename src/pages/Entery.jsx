import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Entery = () => {
  return (
    <motion.div className="w-screen h-screen flex items-center justify-center flex-col">
      <Link
        to="/home"
        className=" items-center justify-center flex group hover:scale-110 transition-all duration-500 ease-in-out"
      >
        <div className="overflow-hidden z-10 absolute">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-4xl font-light tracking-tighter"
          >
            Start
          </motion.h1>
        </div>
        <div className=" w-80 h-80 z-0">
          <motion.img
            className="w-full h-full filter rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            layoutId="love"
            src="../../public/abstract.jpg"
            alt="image"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default Entery;
