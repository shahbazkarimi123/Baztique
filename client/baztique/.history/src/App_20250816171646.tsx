import './App.css'
import Footer from './components/inc/Footer'
import HomePage from './components/pages/home/HomePage'
import NaviBar from './components/inc/NaviBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchDescription from './components/watch-details/WatchDescription';
function App() {
  

  return (
    <div>
      <NaviBar/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/details/:id" element={<WatchDescription/>}/>
      </Routes>
      </Router>
      {/* <Footer/> */}
      </div>
    
  )
}

export default App
