import watch1 from '../../../../assets/watch.jpg'
import watch2 from '../../../../assets/watch.jpg'
import watch3 from '../../../../assets/watch.jpg'
import watch4 from '../../../../assets/watch.jpg'
import watch5 from '../../../../assets/watch.jpg'
import watch6 from '../../../../assets/watch.jpg'


import WatchCard from './WatchCard';
function WatchList(){
    const watches = [
    { id: 1, name: "Classic Watch", price: "$120", image: watch1 },
    { id: 2, name: "Luxury Watch", price: "$250", image: watch2 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch3 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch4 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch5 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch6 },
    { id: 1, name: "Classic Watch", price: "$120", image: watch1 },
    { id: 2, name: "Luxury Watch", price: "$250", image: watch2 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch3 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch4 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch5 },
    { id: 3, name: "Sport Watch", price: "$80", image: watch6 },


  ];
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {watches.map((watch) => (
        <WatchCard key={watch.id} watch={watch} />
      ))}
    </div>

    );
}
export default WatchList;
