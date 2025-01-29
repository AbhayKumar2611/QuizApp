import axios from "axios";
import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const setup = JSON.parse(localStorage.getItem("quizSetup"));
    const fetchQustions = async () => {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=${setup.questions}&category=${setup.category}&difficulty=${setup.difficulty}&type=multiple`
      );
      setQuestions(res.data.results);
    };
    fetchQustions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz finished! your score: ${score}`);
    }
  };

  if (questions.length === 0) return <p>Loading....</p>;
  const question = questions[currentQuestion];
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Questions {currentQuestion + 1} of {questions.length}
      </h1>
      <p className="mb-4">{question.question}</p>
      {question.incorrect_answers
        .concat(question.correct_answer)
        .map((answer, index) => (
          <button
            key={index}
            className="block w-full p-2 my-2 bg-gray-200 rounded"
            onClick={() => handleAnswer(answer === question.correct_answer)}
          >
            {answer}
          </button>
        ))}
    </div>
  );
};

export default Quiz;
