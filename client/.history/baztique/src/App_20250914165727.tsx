import "./App.css";
import Footer from "./components/inc/Footer";
import HomePage from "./components/pages/home/HomePage";
import NaviBar from "./components/inc/NaviBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchDescription from "./components/pages/home/watch-details/WatchDescription";
import LoginUser from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import PrivacyPolicy from "./privacy-term/PrivacyPolicy";
import TermAndCondition from "./privacy-term/TermAndCondition";
import WatchByGender from "./components/pages/filterPage/WatchByGender";
import NotFound from "./components/error/NotFound";
import PrivateRoute from "./components/authentication/PrivateRoute";
import BuyPage from "./components/pages/buy/BuyPage";
import UploadPage from "./components/pages/uploadWatch/UploadPage";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NaviBar />
        <div className="home-page-body flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage />
                <PrivateRoute>
                  
                </PrivateRoute>
              }
            />
            <Route
              path="/watches/:id"
              element={
                <PrivateRoute>
                  <WatchDescription />
                </PrivateRoute>
              }
            />

            <Route
              path="/watches/:id/buy"
              element={
                <PrivateRoute>
                  <BuyPage />
                </PrivateRoute>
              }
            />
            <Route  path="/watches/upload/new-watch" element={<PrivateRoute><UploadPage/></PrivateRoute>}/>
            <Route path="/watches/login" element={<LoginUser />} />
            <Route path="/watches/signup" element={<Signup />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-and-condition" element={<TermAndCondition />} />
            <Route path="/:genderParam" element={<WatchByGender />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
