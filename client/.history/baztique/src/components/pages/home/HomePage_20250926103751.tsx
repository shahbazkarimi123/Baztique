
import './homePage.css';
import WatchList from './box/WatchList'
import ImageSlider from './image-slider/ImageSlider';
function HomePage() {

  return (
    <div className="bg-gray-200">
      

      <ImageSlider/>
      
      <div className="p-6 md:p-10 pt-2 ">
        <WatchList/>
        
      </div>
    </div>

  )
}

export default HomePage