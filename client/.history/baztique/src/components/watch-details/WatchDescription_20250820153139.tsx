import "./WatchDescription.css";
import { useParams } from "react-router-dom";
import image1 from "../../assets/watch.jpg";
import { useState, useEffect } from "react";
import type { Watch } from "../models/Watch";
import { getWatchById } from "../../services/WatchDetailsById";
function WatchDescription() {
  const { id } = useParams<{ id: string }>();
  const [watch, setWatch] = useState<Watch | null>(null);

  useEffect(() => {
    if (id) {
      getWatchById(Number(id)).then((data) => {
        if (data) {
          setWatch(data);
        }
      });
    }
  }, [id]);
  if (!watch) {
    return <div>Loading ....</div>;
  }

  return (
    <div className="main-content bg-white">
      <div className="flex-col md:columns-2">
        <div className="flex justify-center bg-white">
          <img src={image1} className="max-h-52" />
        </div>
        <div className="flex justify-center">
          <div className="pt-6">
            <div className="flex justify-between items-center">
              <h1 className="uppercase font-bold text-[20px]">{watch.brand}</h1>
              {watch.trending && (
                <h3 className="size-[20%] text-center text-[8px] text-white border-blue-900 bg-blue-900 rounded-full shadow shadow-gray-900">
                  TRENDING
                </h3>
              )}
            </div>
            <p className="text-black text-[18px]">
              {watch.gender} | {watch.collectionName}
            </p>
            <h1 className="text-gray-500 text-[15px]">SKB 2325343</h1>
            <h1 className="text-black text-[18px]">{watch.price}</h1>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-700 text-white px-12 py-2
                border rounded-[8px] border-none
                hover:shadow-lg shadow-2xl shadow-gray-900"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <hr className="w-[80%] mx-auto border-gray-400 shadow shadow-black" />

        <p className="pt-4">
          <span className="text-green-400">MORE</span> INFORMATION
        </p>
      </div>
      <div className="md:flex text-gray-600 md:text-left font-light text-[14px] md:text-[16px]">
        <div className="md:w-1/2 px-10 md:px-[5%]">
          <h2 className="uppercase md:capitalize text-gray-800 text-[18px] font-normal">
            Description
          </h2>
          <p>
            Introducing KWatch 100231212, a premium timepiece from the KWatch
            watches for Men & from collection SPORT MULTI-FUNCTION. This brand
            hailing from INDIA, this time piece exemplifies the quality found
            across KWatch watches, featuring Quartz movement and a durable
            Mineral Glass. Its distinctive Stainless Steel case adds a modern
            touch, while offering water resistance up to 30 mm. The Analog dial
            ensures timeless elegance, backed by a 24 Months warranty for your
            peace of mind.
          </p>
          <div className="py-5 space-y-1">
            <h3>
              <span className="text-gray-800 font-normal">
                Watch Glass/Crystal
              </span>
              : {watch.watchGlassOrCrystal}
            </h3>
            <h3>
              <span className="text-gray-800 font-normal">Movement</span>:
              Quartz
            </h3>
            <h3>
              <span className="text-gray-800 font-normal">
                Warranty Time Period
              </span>
              : {watch.warranty} Month
            </h3>
            <h3>
              <span className="text-gray-800 font-normal">
                Water Resistance
              </span>
              : {watch.waterResistance} mm
            </h3>
            <h3>
              <span className="text-gray-800 font-normal">Case Material</span>:
              {watch.caseMaterial}
            </h3>
            <h3>
              <span className="text-gray-800 font-normal">Gender</span>: {watch.gender}
            </h3>
          </div>
        </div>
        <div className="pl-10 md:px-[5%] md:w-1/2 space-y-0">
          <h3>
            <span className="text-gray-800 font-normal">Brand</span>: {watch.gender}
          </h3>
          <h3>
            <span className="text-gray-800 font-normal">Collection Name</span>:
            {watch.collectionName}
          </h3>
          <h3>
            <span className="text-gray-800 font-normal">Brand's Country</span>:
            {watch.brandCountry}
          </h3>

          {/* Case starts from here */}

          <div className="flex justify-between w-full ">
            <div className="pr-1">
              <h2 className="uppercase md:capitalize text-gray-800 text-[18px] pt-5 font-normal">
                Dial & Case
              </h2>
              <h3>
                <span className="text-gray-800 font-normal">Case Shape</span>:
                {watch.caseShape}
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">Dial Colour</span>:
                {watch.dialColor}
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">Dial Type</span>:
                {watch.dialType}
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Case Size [mm]
                </span>
                : wa MM
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Case Thickness [mm]
                </span>
                : 10 mm
              </h3>
            </div>
            <div className="pr-2">
              <h2 className="uppercase md:capitalize text-gray-800 text-[18px] pt-5 font-normal">
                Strap
              </h2>
              <h3>
                <span className="text-gray-800 font-normal">Strap Color</span>:
                Rose Gold
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Strap Material
                </span>
                : Stainless Steel Multi Function
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Strap Width [mm]
                </span>
                : 22 MM
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">Strap Type</span>:
                Strap
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WatchDescription;
