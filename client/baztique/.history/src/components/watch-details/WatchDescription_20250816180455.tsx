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
          <div class>
            <h1 className="font-semibold text-[20px] sm:text-center md:text-start">CALVIN KLEIN</h1>
            <h1>Men | Sport Multi-Functional</h1>
            <h1>SKB 2325343</h1>
            <h1>19,500</h1>
            <div>
              <h1 className="size-[70%] text-center border-1 border-pink-700 rounded-full">
                TRENDING
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WatchDescription;
