import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Abstract from "../assets/abstract.jpg";
const Entery = () => {
  return (
    <motion.div className="w-screen h-screen flex items-center justify-center flex-col">
      <Link
        to="/home"
        className=" items-center justify-center flex group hover:scale-110 transition-all duration-500 ease-in-out"
      >
        <div className="overflow-hidden z-10 absolute h-20">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: -100, transition: { duration: 0.4 } }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 70,
              damping: 20,
            }}
            className="text-5xl font-light tracking-tighter"
          >
            Begin
          </motion.h1>
        </div>
        <div className=" w-80 h-80 z-0">
          <motion.img
            className="w-full h-full filter rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            layoutId="love"
            src={Abstract}
            alt="image"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default Entery;
