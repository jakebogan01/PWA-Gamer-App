import Home from "./pages/Home";
import Newest from "./pages/Newest";
import Recommended from "./pages/Recommended";
import Profile from "./pages/Profile";
import GameDetails from "./pages/GameDetails";
import SplashScreen from "./components/SplashScreen";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="fixed inset-0 w-full h-full bg-black z-0" style={{backgroundImage: "linear-gradient(to bottom right, #FF4359 10%, #AA1439, #68192F, #53192A, #000000 90%)"}}></div>
          <SplashScreen />
          <main className="font-noto">
              <Routes>
                  <Route path="/" element={<Home title="Home" />}></Route>
                  <Route path="/newest" element={<Newest title="Newest" />}></Route>
                  <Route path="/recommended" element={<Recommended title="Recommended" />}></Route>
                  <Route path={'/:id'} element={<GameDetails title="Game Details" />}></Route>
                  <Route path="/profile" element={<Profile title="Profile" />}></Route>
              </Routes>
          </main>
      </Router>
  );
}

export default App;
