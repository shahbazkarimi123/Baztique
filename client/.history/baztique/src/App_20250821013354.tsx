import './App.css'
import Footer from './components/inc/Footer'
import HomePage from './components/pages/home/HomePage'
import NaviBar from './components/inc/NaviBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchDescription from './components/watch-details/WatchDescription';
import LoginUser from './components/authentication/Login';
import Signup from './components/authentication/Signup';
function App() {
  

  return (
      

    <Router>
    <div>
      <NaviBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/watches/:id" element={<WatchDescription/>}/>
        <Route path="/watches/login" element={<LoginUser/>}/>
        <Route path="/watches/signup" element={<Signup/>}/>
        <Route path="/privacy"
      </Routes>

      <Footer/>
      </div>
      </Router>
    
  )
}

export default App
