
import './homePage.css';
import WatchList from './box/WatchList'
import ImageSlider from './slider/ImageSlider';
function HomePage() {

  return (
    <div>
      

      <ImageSlider/>
      
      <div className="p-6 md:p-10 pt-2 w-full">
        <WatchList/>
        
      </div>

      <div>
        
      </div>
    </div>

  )
}

export default HomePage