import { Link } from "react-router-dom";


import type { Watch } from "../../../models/Watch";
function WatchCard({ watch }: { watch: Watch }) {
  return (
    <Link to={`/watches/${watch.id}`}>
      <div className="  rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-current">
        <img
          className="size-[160px] sm:size-[240px] md:size-[320px] object-cover mx-auto 
           border-4 border-[#4d8076] rounded-t-2xl"
          src={`data:image/jpeg;base64,${watch.firstImage}`}
          alt={watch.brand}
        />
        <div className="px-4 py-3 text-center ">
          <h3 className="text-lg font-semibold font-bole text-gray-700">{watch.brand}</h3>
          <p className="">{watch.gender} | Bold</p>
          <p className="text-green-600 font-semibold">{watch.price}</p>
          <br />
          <button className="text-white bg-[#00c9a7] px-4 py-2 rounded-xl font-semibold">
            Buy Only
          </button>
        </div>
      </div>
    </Link>
  );
}
export default WatchCard;
