/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function GameCards({ game }) {
  return (
    <>
      <motion.div className="tooltip" data-tip={game.instructions}>
        <div className="card2">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner rounded-xl">
            <div className="flex flex-col gap-4">
              <div className="w-full rounded-xl opacity-90">
                <img
                  className="w-full rounded-t-xl"
                  src={game.thumbnail}
                  alt={game.title}
                />
              </div>
              <div className="flex flex-col mx-5">
                <h1 className="text-2xl font-bold">{game.title}</h1>
                <p className="text-sm text-gray-400 mb-2">{game.description}</p>
                <p className=" font-black">
                  Price: <span className="text-white">{game.worth}</span>
                </p>
                <p className="">
                  Platform: <span className="text-white">{game.platforms}</span>
                </p>
              </div>
              <div className="flex">
                <a
                  className="w-full p-4 text-secondary"
                  target="_blank"
                  href={game.open_giveaway_url}
                  rel="noreferrer"
                >
                  Avail Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
