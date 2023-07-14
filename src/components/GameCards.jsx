/* eslint-disable react/prop-types */
export default function GameCards({ game }) {
  return (
    <>
      <div className="tooltip" data-tip={game.instructions}>
        <div className="card2 animate-fade animate-duration-500">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner rounded-xl">
            <div className="flex flex-col gap-4">
              <div className="w-full rounded-xl">
                <img
                  className="w-full rounded-t-xl"
                  src={game.thumbnail}
                  alt=""
                />
              </div>
              <div className="flex flex-col mx-5">
                <h1 className="text-2xl font-bold">{game.title}</h1>
                <p className="text-sm text-gray-400 mb-2">{game.description}</p>
                <p className=" font-black text-white/60">Price: {game.worth}</p>
                <p className=" text-white/60">Platform: {game.platforms}</p>
              </div>
              <div className="w-full justify-end flex">
                <a href={game.open_giveaway_url}>
                  <button className="btn bg-transparent uppercase">
                    Giveaway
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
