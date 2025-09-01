import './App.css'
import Footer from './components/inc/Footer'
import HomePage from './components/pages/home/HomePage'
import NaviBar from './components/inc/NaviBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <div>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/details" element=
      </Routes>
      </Router>
      </div>
    
  )
}

export default App
