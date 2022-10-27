import Home from "./pages/Home";
import Newest from "./pages/Newest";
import Recommended from "./pages/Recommended";
import GameDetails from "./pages/GameDetails";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="fixed inset-0 w-full h-full bg-black z-0" style={{backgroundImage: "linear-gradient(to bottom right, #FF4359 10%, #AA1439, #68192F, #53192A, #000000 90%)"}}></div>
          <main className="font-noto">
              <Routes>
                  <Route path="/" element={<Home title="Home" />}></Route>
                  <Route path="/newest" element={<Newest title="Newest" />}></Route>
                  <Route path="/recommended" element={<Recommended title="Recommended" />}></Route>
                  <Route path={'/:id'} element={<GameDetails title="Game Details" />}></Route>
              </Routes>
          </main>
      </Router>
  );
}

export default App;
