import Home from "./pages/Home";
import Newest from "./pages/Newest";
import Recommended from "./pages/Recommended";
import Profile from "./pages/Profile";
import GameDetails from "./pages/GameDetails";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="fixed inset-0 w-full h-full bg-black z-0" style={{backgroundImage: "linear-gradient(to bottom right, #FF4359 10%, #AA1439, #68192F, #53192A, #000000 90%)"}}></div>
          <div className="flex justify-center items-center fixed inset-0 w-full h-full bg-black z-50" style={{backgroundImage: "linear-gradient(to bottom right, #FF4359 10%, #AA1439, #68192F, #53192A, #000000 90%)"}}>
              <div className="text-center">
                  <div className="flex items-center justify-center w-[8rem] h-[8rem] rounded-full" id="animateWrapper" style={{backgroundImage: "linear-gradient(#F83F56, #A11538)"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="block" id="animateLogo" width="75" height="43" fill="none"><path fill="#FFFFFF" fillRule="evenodd" d="M19.14.92h36.8c2.813 0 5.303 1.141 7.393 2.967 3.696 3.194 6.347 8.67 8.195 14.376 1.768 5.705 2.652 11.638 2.652 15.973 0 3.195-.562 5.705-1.607 6.77l-.08.076c-.08.076-.241.152-.322.304-1.125.913-3.294 1.445-5.303 1.445-2.089.076-4.178-.38-5.303-1.369l-.321-.304-9.642-10.8c-.161-.153-.321-.305-.562-.381a3.152 3.152 0 0 0-.965-.153h-25.07c-.402 0-.723.077-.964.153-.161.076-.402.228-.563.38L13.836 41.16c-.08.075-.16.228-.321.304-1.125.988-3.295 1.445-5.383 1.369-2.009-.076-4.178-.532-5.303-1.445l-.322-.304-.08-.076C1.383 39.866.82 37.432.82 34.237c0-4.336.884-10.269 2.652-15.974 1.767-5.78 4.5-11.257 8.195-14.452 2.17-1.75 4.66-2.89 7.472-2.89V.92Zm32.38 7.15c1.446 0 2.652 1.065 2.652 2.434 0 1.37-1.206 2.434-2.652 2.434-1.446 0-2.571-1.065-2.571-2.434 0-1.369 1.125-2.434 2.571-2.434Zm-4.982 4.64c1.447 0 2.572 1.065 2.572 2.434 0 1.37-1.126 2.435-2.572 2.435-1.446 0-2.651-1.065-2.651-2.434.08-1.294 1.286-2.435 2.651-2.435Zm9.883 0c1.447 0 2.572 1.065 2.572 2.434 0 1.37-1.125 2.435-2.572 2.435-1.446 0-2.571-1.065-2.571-2.434 0-1.294 1.125-2.435 2.571-2.435Zm-4.9 4.716c1.445 0 2.65 1.065 2.65 2.434 0 1.37-1.205 2.434-2.65 2.434-1.447 0-2.572-1.065-2.572-2.434 0-1.369 1.125-2.434 2.571-2.434Zm-22.58-4.031c1.044 0 1.848.76 1.848 1.673 0 .989-.803 1.75-1.848 1.75l-4.017.076.08 3.803c0 .913-.804 1.75-1.768 1.75s-1.848-.76-1.848-1.674l-.08-3.803-4.018.076c-1.044 0-1.848-.76-1.848-1.673 0-.989.803-1.75 1.848-1.75l4.018-.076-.08-3.803c0-.913.803-1.75 1.767-1.75.964 0 1.848.76 1.848 1.673l.08 3.804 4.018-.076Z" clipRule="evenodd"/></svg>
                  </div>
                  <span className="inline-block mt-3 font-semibold text-2xl text-[#A7A7A7]">Gamers</span>
              </div>
          </div>
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
