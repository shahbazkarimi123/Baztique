import "./WatchDescription.css";
import { useParams } from "react-router-dom";
import image1 from "../../assets/watch.jpg";
function WatchDescription() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="main-content bg-gray-200">
      <div className="flex-col md:columns-2">
        <div className="flex justify-center">
          <img src={image1} className="h-24" />
        </div>
        <div className="flex justify-center">
          <div className="pt-6">
            <h1 className="font-bold text-[22px] sm:text-center md:text-start">
              CALVIN KLEIN
            </h1>
            <p className="text-black text-[18px]">
              Men | Sport Multi-Functional
            </p>
            <h1 className="text-gray-500 text-[15px]">SKB 2325343</h1>
            <h1 className="text-black text-[18px]">19,500</h1>
            <div>
              <h1 className="size-[57%] text-center border-1 text-blue-900 border-blue-900 rounded-full">
                TRENDING
              </h1>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-green-500 px-12 py-2
                border rounded-[8px] border-none
                shadow-xs hover:shadow-2xl shadow-black"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <p>
          <span className="text-green-400">MORE</span> INFORMATION
        </p>
      </div>
      <div className="md:flex text-gray-500 md:text-left font-light">
        <div className="md:w-1/2 px-[5%]">
          <h2 className="text-gray-700 text-xl">Description</h2>
          <p className="">
            Introducing KWatch 100231212, a premium timepiece from the KWatch
            watches for Men & from collection SPORT MULTI-FUNCTION. This brand
            hailing from INDIA, this time piece exemplifies the quality found
            across KWatch watches, featuring Quartz movement and a durable
            Mineral Glass. Its distinctive Stainless Steel case adds a modern
            touch, while offering water resistance up to 30 mm. The Analog dial
            ensures timeless elegance, backed by a 24 Months warranty for your
            peace of mind.
          </p>
          <div className="py-8 space-y-1">
            <h3>
              <span className="text-gray-800">Watch Glass/Crystal</span>:
              Mineral Glass
            </h3>
            <h3>
              <span className="text-gray-800">Movement</span>: Quartz
            </h3>
            <h3>
              <span className="text-gray-800">Warranty Time Period</span>: 24
              Month
            </h3>
            <h3>
              <span className="text-gray-800">Water Resistance</span>: 30 mm
            </h3>
            <h3>
              <span className="text-gray-800">Case Material</span>: Stainless
              Steel
            </h3>
            <h3>
              <span className="text-gray-800">Gender</span>: Men
            </h3>
          </div>
        </div>
        <div className="w-1/2 text-1/2 py-8 space-y-1">
          <h3>
            <span className="text-gray-800">Brand</span>: Kwatch
          </h3>
          <h3>
            <span className="text-gray-800">Collection Name</span>: Sport Multi
            Function
          </h3>
          <h3>
            <span className="text-gray-800">Brand's Country</span>: India
          </h3>

          {/* Case starts from here */}

          <h2 className="text-gray-700 text-xl pt-5">DIAL & CASE</h2>
          <div className="md:flex">
            <div className="w-1/2">
              <h3>
                <span className="text-gray-800">Case Shape</span>: Round
              </h3>
              <h3>
                <span className="text-gray-800"> Name</span>: Sport
                Multi Function
              </h3>
              <h3>
                <span className="text-gray-800">Brand's Country</span>: India
              </h3>
            </div>
            <div>
              <h3>
                <span className="text-gray-800">Brand</span>: Kwatch
              </h3>
              <h3>
                <span className="text-gray-800">Collection Name</span>: Sport
                Multi Function
              </h3>
              <h3>
                <span className="text-gray-800">Brand's Country</span>: India
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WatchDescription;
