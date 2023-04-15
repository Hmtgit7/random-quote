import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
}
