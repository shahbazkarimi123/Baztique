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
            <p className="text-black text-[18px]">Men | Sport Multi-Functional</p>
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
      <div>
        <p><span class="text-green-400">MORE</span> INFORMATION</p>
      </div>
      <div>

      </div>
    </div>
  );
}
export default WatchDescription;
