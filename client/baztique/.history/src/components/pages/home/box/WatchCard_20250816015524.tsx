type Watch={
    id:number;
    name: string;
    price:string;
    image:string;
}
function WatchCard({watch}:{watch:Watch}){
    return(
        <div className="max-w-1/2 rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={watch.image}
        alt={watch.name}
      />
      <div className="px-4 py-3">
        <h3 className="text-lg font-semibold">{watch.name}</h3>
        <p className="text-gray-600">{watch.price}</p>
      </div>
    </div>
    )


}
export default WatchCard;