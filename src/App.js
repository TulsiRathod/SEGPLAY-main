import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LeaderBoard from "./Components/LeaderBoard";
import Login from "./Components/Login";

function App() {
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
