import { useEffect, useState } from "react";
import GameCards from "../components/GameCards";
import { AnimatedTextCharacter } from "../components/AnimatedTextCharacter";
import axios from "axios";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [games, setGames] = useState([]);
  const [worth, setWorth] = useState({});
  const [error, setError] = useState(false);
  const [platform, setPlatform] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const allOptions = {
          method: "GET",
          url: "https://gamerpower.p.rapidapi.com/api/giveaways",
          headers: {
            "X-RapidAPI-Key":
              "27a6bfa8a6msh94a5ce5ac290561p1086dajsn198ab60767cb",
            "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
          },
        };
        const worthOptions = {
          method: "GET",
          url: "https://gamerpower.p.rapidapi.com/api/worth",
          headers: {
            "X-RapidAPI-Key":
              "27a6bfa8a6msh94a5ce5ac290561p1086dajsn198ab60767cb",
            "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
          },
        };

        const response = await axios.request(allOptions);
        const worthResponse = await axios.request(worthOptions);

        setGames(response.data);
        setLoading(false);
        setWorth(worthResponse.data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  const filterGames = () => {
    let filteredGames = [...games];

    // Apply filters based on selected options
    if (platform) {
      filteredGames = filteredGames.filter((game) =>
        game.platforms.includes(platform)
      );
    }
    if (type) {
      filteredGames = filteredGames.filter((game) => game.type === type);
    }

    if (search) {
      filteredGames = filteredGames.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredGames;
  };

  const filteredGames = filterGames();
  const displayedCount = filteredGames.length;

  return (
    <div className="w-full mt-32">
      <div className="flex justify-between mx-40">
        <div className="flex flex-col gap-4 mb-10">
          <div className="text-4xl">
            <AnimatedTextCharacter
              text="Giveaways"
              staggerChildren={0.1}
              delayChildren={0.1}
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input max-w-md input-primary w-full rounded-md"
          />

          <div className="flex gap-2">
            <select
              name="platform"
              value={platform}
              defaultValue="Platform"
              onChange={(e) => setPlatform(e.target.value)}
              className="select select-secondary rounded-xl"
            >
              <option value="" disabled>
                Platform
              </option>
              <option value="">All</option>
              <option value="PC">PC</option>
              <option value="Steam">Steam</option>
              <option value="Epic Games Store">Epic Games Store</option>
              <option value="Ubisoft">Ubisoft</option>
              <option value="GOG">GOG</option>
              <option value="Itch.io">Itch.io</option>
              <option value="Playstation 4">Playstation 4</option>
              <option value="Playstation 5">Playstation 5</option>
              <option value="Xbox One">Xbox One</option>
              <option value="Xbox Series X/S">Xbox Series X/S</option>
              <option value="Nintendo Switch">Nintendo Switch</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value="VR">VR</option>
              <option value="Battle.net">Battle.net</option>
              <option value="Origin">Origin</option>
              <option value="DRM-Free">DRM-Free</option>
              <option value="Xbox 360">Xbox 360</option>
            </select>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="select select-secondary rounded-xl"
            >
              <option value="" disabled>
                Type
              </option>
              <option value="">All</option>
              <option value="Game">Game</option>
              <option value="DLC">DLC</option>
              <option value="Early Access">Early Access</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-md w-full mt-5 text-center">
          <p className="font-mono font-bold text-primary">
            There are currently{" "}
            <span className="text-white">{worth.active_giveaways_number} </span>
            Active Giveaways from which you can avail!
          </p>
          <p className="font-mono font-bold text-primary">
            The Worth Estimation for the Giveaways is{" "}
            <span className="text-white">{worth.worth_estimation_usd} $</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center mb-10">
        <p className="text-center font-bold font-mono text-xl text-secondary">
          Giveaways in display:{" "}
          <span className="text-white">{displayedCount}</span>
        </p>
      </div>
      <motion.div
        layout
        transition={{
          layout: { duration: 2, type: "spring", stiffness: 100, damping: 30 },
        }}
        className="flex gap-12 items-center justify-center flex-wrap"
      >
        {loading ? (
          <motion.div className="flex overflow-hidden items-center justify-center text-2xl">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              Loading...{" "}
              <span className="loading loading-spinner loading-md"></span>
            </motion.h1>
          </motion.div>
        ) : error ? (
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Something went wrong.</span>
          </div>
        ) : filteredGames.length === 0 ? (
          <div className="alert alert-error">No results found.</div>
        ) : (
          filteredGames.map((game, index) => (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              layout
              key={index}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                },
              }}
            >
              <GameCards game={game} key={index} />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
