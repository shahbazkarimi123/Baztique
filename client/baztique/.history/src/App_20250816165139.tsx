import './App.css'
import Footer from './components/inc/Footer'
import HomePage from './components/pages/home/HomePage'
import NaviBar from './components/inc/NaviBar'
import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
function App() {
  

  return (
    <div className="app">
      <NaviBar/>

      <HomePage/>
      <Footer/>
    </div>
    
  )
}

export default App
