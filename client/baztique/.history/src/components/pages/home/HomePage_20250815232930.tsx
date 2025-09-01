
import './homePage.css';
import WatchList from './box/WatchList'
import ImageSlider from './image-slider/ImageSlider';
function HomePage() {

  return (
    <div className="home-page-body bg-amber-300">
      <div>

      <ImageSlider/>
      </div>
      <div className="px-12 p-w-full">
        <WatchList/>
        
      </div>
    </div>

  )
}

export default HomePage