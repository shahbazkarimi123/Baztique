import "./WatchDescription.css";
import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import type { Watch } from "../../../models/Watch";
import { getWatchById } from "../../../../services/WatchDetailsById";


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
    <div className="main-content ">
      <div className="flex-col md:columns-2">
        <div className="flex justify-around">
          <img src={`data:image/jpeg;base64,${watch.firstImage}`}  className="size-[300px] border-4 rounded-xl border-[#4d8076]" />
        </div>
        <div className="flex justify-center">
          <div className="pt-6">
            <div className="flex justify-between items-center">
              <h1 className="uppercase font-bold text-[20px]">{watch.brand}</h1>
              {watch.trending && (
                <h3 className="size-[35%] text-center text-[8px] text-white border-blue-900 bg-blue-900 rounded-full shadow shadow-gray-900">
                  TRENDING
                </h3>
              )}
            </div>
            <p className="text-black text-[18px]">
              {watch.gender} | {watch.collectionName}
            </p>
            <h1 className="text-gray-500 text-[15px]">{watch.modelNumber}</h1>
            <h1 className="text-green-600 text-[18px]">{watch.price}</h1>
            <div className="mt-6">
              <Link
                to={`/watches/${watch.id}/buy`}
                className="bg-[#00c9a7] text-white px-12 py-2
             border rounded-[8px] border-none font-semibold
             hover:shadow-lg shadow-2xl shadow-gray-900
             inline-block text-center"
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <hr className="w-[80%] mx-auto shadow-[5px_5px_5px_#4d8076]" />

        <p className="pt-4 md:pt-16">
          <span className="text-green-400">MORE</span> INFORMATION
        </p>
      </div>
      <div className="md:flex text-gray-600 md:text-left font-light text-[14px] md:text-[16px]">
        <div className="md:w-1/2 px-10 md:px-[5%]">
          {watch.description && <div>
            <h2 className="uppercase md:capitalize text-gray-800 text-[18px] font-normal">
            Description
          </h2>
          <p>
            {watch.description}
          </p>
            </div>}
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
            {watch.warranty && <h3>
              <span className="text-gray-800 font-normal">
                Warranty Time Period
              </span>
              : {watch.warranty} Month
            </h3>}
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
              <span className="text-gray-800 font-normal">Gender</span>:{" "}
              {watch.gender}
            </h3>
          </div>
        </div>
        <div className="pl-10 md:px-[5%] md:w-1/2 space-y-0">
          <h3>
            <span className="text-gray-800 font-normal">Brand</span>:{" "}
            {watch.brand}
          </h3>
          {watch.collectionName && <h3>
            <span className="text-gray-800 font-normal">Collection Name</span>:
            {watch.collectionName}
          </h3>}
          {watch.brandCountry && <h3>
            <span className="text-gray-800 font-normal">Brand's Country</span>:
            {watch.brandCountry}
          </h3>}

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
                : {watch.caseSizeMM} MM
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Case Thickness [mm]
                </span>
                : {watch.caseThicknessMM} mm
              </h3>
            </div>
            <div className="pr-2">
              <h2 className="uppercase md:capitalize text-gray-800 text-[18px] pt-5 font-normal">
                Strap
              </h2>
              <h3>
                <span className="text-gray-800 font-normal">Strap Color</span>:
                {watch.strapColor}
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Strap Material
                </span>
                : {watch.strapMaterial}
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">
                  Strap Width [mm]
                </span>
                : {watch.strapWidthMM} MM
              </h3>
              <h3>
                <span className="text-gray-800 font-normal">Strap Type</span>:
                {watch.strapType}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WatchDescription;
