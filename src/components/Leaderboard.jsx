import React from "react";

const Leaderboard = () => {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      {leaderboard.length > 0 ? (
        <ol>
          {leaderboard
            .sort((a, b) => b.score - a.score)
            .map((user, index) => (
              <li key={index}>
                {user.name} - {user.score}
              </li>
            ))}
        </ol>
      ) : (
        <p>No results yet!</p>
      )}
    </div>
  );
};

export default Leaderboard;
