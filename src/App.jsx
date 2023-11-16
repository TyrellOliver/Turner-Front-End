import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/Components/Styles/App.css";

import Nav from "./Components/Nav";

import Home from "./Components/Pages/Home";
import Index from "./Components/Pages/Index";
import New from "./Components/Pages/New";
import Show from "./Components/Pages/Show";
import Edit from "./Components/Pages/Edit";
import FourOFour from "./Components/Pages/FourOFour";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/:index" element={<Show />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="/songs/:index/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
}

export default App;
