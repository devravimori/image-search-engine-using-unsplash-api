import Home from './Components/Home'
import Search from './Components/Search';
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  );
}

export default App;
