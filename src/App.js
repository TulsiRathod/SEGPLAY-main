import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/index.html" element={<Login/>} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
