import Home from "./pages/Home";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
          <main className="font-noto">
              <Routes>
                  <Route path="/" element={<Home title="Home" />}></Route>
              </Routes>
          </main>
      </Router>
  );
}

export default App;
