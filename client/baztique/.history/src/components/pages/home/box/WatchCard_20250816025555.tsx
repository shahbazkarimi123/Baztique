type Watch = {
  id: number;
  name: string;
  price: string;
  image: string;
};
function WatchCard({ watch }: { watch: Watch }) {
  return (
    <div className="  rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-current">
      <img
        className="sm:max-h-[10rem] md:max-h-[15rem] lg:max-h-[20rem] object-cover mx-auto"
        src={watch.image}
        alt={watch.name}
      />
      <div className="px-4 py-3 text-center font-bole">
        <h3 className="text-lg font-semibold">{watch.name}</h3>
        <p className="">Men | Bold</p>
        <p className="text-gray-600">{watch.price}</p>
        <button>buy</button>
      </div>
    </div>
  );
}
export default WatchCard;
