/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedTextCharacter } from "../components/AnimatedTextCharacter";

const Home = () => {
  const ParentVariants = {
    initial: {},
    animate: {
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };
  const TextFadeUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 100,
      },
    },
  };
  const Fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={ParentVariants}
        initial="initial"
        animate="animate"
        className="hero min-h-screen bg-base-100 relative overflow-hidden"
      >
        <motion.div className="mt-5">
          <motion.img
            layoutId="love"
            transition={{ duration: 2, ease: "easeInOut" }}
            src="../../public/abstract.jpg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -20, -50, 0, 50, 20, 0],
              x: [0, -50, 0, 50, 0],
            }}
            transition={{
              duration: 10,
              type: "keyframes",
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="rounded-full bg-primary absolute top-0 left-0 blur-lg mix-blend-mutiply w-80 h-80 filter opacity-50"
          ></motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          className="w-screen h-screen flex items-center justify-center"
        >
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
          >
            <motion.div
              animate={{
                x: [0, -150, 0, 150, 0],
              }}
              transition={{
                duration: 10,
                delay: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="rounded-full bg-black absolute top-50 mix-blend-mutiply w-96 h-96 filter opacity-60 blur-xl"
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              y: [0, 20, 50, 0, -20, -50, 0],
              x: [0, 20, 50, 0, -20, -50, 0],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="rounded-full top-[30rem] bg-secondary -right-10 absolute mix-blend-mutiply w-80 overflow-hidden h-80 filter opacity-50 blur-xl"
          ></motion.div>
        </motion.div>
        <div className="hero-content flex-col-reverse lg:flex-row-reverse mt-16">
          <div className="max-w-lg text-center flex justify-center items-center flex-col">
            <div className="text-transparent text-8xl tracking-tighter italic">
              <AnimatedTextCharacter
                text="FreeGameFiesta"
                staggerChildren="0.1"
                delayChildren="1"
              />
            </div>
            <motion.p variants={TextFadeUp} className="py-6 text-base">
              Free giveaways of the best games on steam, epic games, and more!
              That is right you cheap dog you can get free games here! Just
              click the button below to get started!
            </motion.p>
            <Link to="/login">
              <motion.button
                variants={Fade}
                className="btn hover:scale-105 px-10 shadow-primary/80 btn-ghost text-white rounded-xl normal-case shadow-lg"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
