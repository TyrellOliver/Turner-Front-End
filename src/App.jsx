import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
