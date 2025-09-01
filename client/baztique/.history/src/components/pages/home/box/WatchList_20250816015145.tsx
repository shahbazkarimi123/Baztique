import watchImage from '../../../../assets/watch.jpg'
function WatchList(){
    const watches = [
    { id: 1, name: "Classic Watch", price: "$120", image: watch1 },
    { id: 2, name: "Luxury Watch", price: "$250", image: watch2 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch3 },
  ];
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover"
            src={watchImage}
            alt="Product" />

            
        </div>

    );
}
export default WatchList;
