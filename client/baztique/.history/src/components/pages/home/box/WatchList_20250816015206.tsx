import watchImage from '../../../../assets/watch.jpg'

function WatchList(){
    const watches = [
    { id: 1, name: "Classic Watch", price: "$120", image: watch1 },
    { id: 2, name: "Luxury Watch", price: "$250", image: watch2 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch3 },
  ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {watches.map((watch) => (
        <WatchCard key={watch.id} watch={watch} />
      ))}
    </div>

    );
}
export default WatchList;
