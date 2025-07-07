import React from "react";
import Menubar from "./components/Menubar/Menubar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExploreFood from "./pages/ExploreFood/ExploreFood";
import Contact from "./pages/Contact Us/Contact";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Menubar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<ExploreFood />} />
      </Routes>
    </div>
  );
};

export default App;
