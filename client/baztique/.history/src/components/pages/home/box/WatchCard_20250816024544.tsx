type Watch={
    id:number;
    name: string;
    price:string;
    image:string;
}
function WatchCard({watch}:{watch:Watch}){
    return(
        <div className="  rounded-xl overflow-hidden shadow-lg bg-white hover:inset-shadow-zinc-950">
      <img
        className="sm:max-h-[10rem] md:max-h-[15rem] lg:max-h-[20rem] object-cover mx-auto"
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