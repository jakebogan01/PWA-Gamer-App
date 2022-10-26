import Home from "./pages/Home";
import Newest from "./pages/Newest";
import Recommended from "./pages/Recommended";
import GameDetails from "./pages/GameDetails";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
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
