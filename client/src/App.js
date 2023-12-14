import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/raporlar" element={<div>Raporlar Sayfasi</div>} />
      <Route path="/ayarlar" element={<div>Ayarlar Sayfasi</div>} />
    </Routes>
  );
}

export default App;
