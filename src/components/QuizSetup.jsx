import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "medium",
    questions: 10,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("quizSetup", JSON.stringify(formData));
    navigate("/quiz");
  };
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Set Up Quiz</h1>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="9">General Knowledge</option>
          <option value="21">Sportsh</option>
          <option value="23">History</option>
          <option value="27">Animals</option>
          <option value="17">Science & Nature</option>
        </select>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard & Nature</option>
        </select>
        <input
          type="number"
          name="questions"
          placeholder="number of questions"
          value={formData.questions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizSetup;
