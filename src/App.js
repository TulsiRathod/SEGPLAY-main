import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LeaderBoard from "./Components/LeaderBoard";
import Login from "./Components/Login";

function App() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };

    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="*" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Leaderboard" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
