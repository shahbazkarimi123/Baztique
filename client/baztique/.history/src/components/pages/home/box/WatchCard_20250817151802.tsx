import {Link} from "react-router-dom";
type Watch = {
  id: number;
  name: string;
  price: string;
  image: string;
};
function WatchCard({ watch }: { watch: Watch }) {
  return (
    <Link to={`watch/`}
    <div className="  rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-current">
      <img
        className="max-h-[10rem] sm:max-h-[15rem] md:max-h-[20rem] object-cover mx-auto"
        src={watch.image}
        alt={watch.name}
      />
      <div className="px-4 py-3 text-center">
        <h3 className="text-lg font-semibold font-bole">{watch.name}</h3>
        <p className="">Men | Bold</p>
        <p className="text-gray-600">{watch.price}</p>
        <br />
        <button className="text-white bg-blue-950 px-2 py-1 rounded-2xl">Buy Only</button>
      </div>
    </div>
  );
}
export default WatchCard;
