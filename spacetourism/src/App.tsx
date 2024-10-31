
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
