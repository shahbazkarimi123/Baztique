import watchImage from '../../../../assets/watch.jpg'
function WatchList(){
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover"
            src={watchImage}
            alt="Product" />

            
        </div>

    );
}
export default WatchList;
