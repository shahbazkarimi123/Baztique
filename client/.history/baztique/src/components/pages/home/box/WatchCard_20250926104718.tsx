import { Link } from "react-router-dom";


import type { Watch } from "../../../models/Watch";
function WatchCard({ watch }: { watch: Watch }) {
  return (
    <Link to={`/watches/${watch.id}`}>
      <div className="  rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-current">
        <img
          className="max-h-[160px] sm:max-h-[15rem] md:max-h-[20rem] object-cover mx-auto 
           border-4 border-gray-400 rounded-t-2xl"
          src={`data:image/jpeg;base64,${watch.firstImage}`}
          alt={watch.brand}
        />
        <div className="px-4 py-3 text-center">
          <h3 className="text-lg font-semibold font-bole">{watch.brand}</h3>
          <p className="">{watch.gender} | Bold</p>
          <p className="text-gray-600">{watch.price}</p>
          <br />
          <button className="text-white bg-blue-950 px-2 py-1 rounded-2xl">
            Buy Only
          </button>
        </div>
      </div>
    </Link>
  );
}
export default WatchCard;
