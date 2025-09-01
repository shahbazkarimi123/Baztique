type Watch={
    id:number;
    name: string;
    price:string;
    image:string;
}
function WatchCard({watch}:{watch:Watch}){
    return(
        <div className="  rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        className="max-h-[10rem] md:max-h-[15rem]  object-cover"
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