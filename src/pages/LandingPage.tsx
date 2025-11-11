import React from "react";
import { useStore } from "../lib/store";

const LandingPage = () => {
  const { studentId, setUser } = useStore();

  const handleJoin = () => {
    const randomId = Math.random().toString(36).substring(2, 15);
    setUser(randomId);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to SafeVoice
      </h1>
      <p className="text-lg mb-8">
        The decentralized and anonymous platform for students, whistleblowers, and anyone who values freedom of expression.
      </p>
      <button
        className="bg-primary text-white font-bold py-2 px-4 rounded"
        onClick={handleJoin}
      >
        Join the Community
      </button>
      {studentId && (
        <p className="mt-4 text-lg">
          Welcome, {studentId}!
        </p>
      )}
    </div>
  );
};

export default LandingPage;
