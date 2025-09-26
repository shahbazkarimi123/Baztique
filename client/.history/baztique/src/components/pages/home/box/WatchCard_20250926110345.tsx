import { Link } from "react-router-dom";


import type { Watch } from "../../../models/Watch";
function WatchCard({ watch }: { watch: Watch }) {
  return (
    <Link to={`/watches/${watch.id}`}>
      <div className="  rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-current">
        <img
          className="size-[160px] sm:size-[240px] md:size-[320px] object-cover mx-auto 
           border-4 border-gray-400 rounded-t-2xl"
          src={`data:image/jpeg;base64,${watch.firstImage}`}
          alt={watch.brand}
        />
        <div className="px-4 py-3 text-center">
          <h3 className="text-lg font-semibold font-bole">{watch.brand}</h3>
          <p className="">{watch.gender} | Bold</p>
          <p className="text-gray-600">{watch.price}</p>
          <br />
          <button className="text-white bg-[#4d8076] px-2 py-1 rounded-2xl font-semibold">
            Buy Only
          </button>
        </div>
      </div>
    </Link>
  );
}
export default WatchCard;
