
import './homePage.css';
import WatchList from './box/WatchList'
import ImageSlider from './image-slider/ImageSlider';
function HomePage() {

  return (
    <div className="bg-gray-100">
      

      <ImageSlider/>
      
      <div className="p-6 md:p-10 pt-2 w-full">
        <WatchList/>
        
      </div>
    </div>

  )
}

export default HomePage