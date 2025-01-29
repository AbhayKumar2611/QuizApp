import { useState } from "react";
import "./App.css";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizSetup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
