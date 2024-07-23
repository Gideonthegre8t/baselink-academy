import React, { useState } from "react";
import "../DashBoard/index.css";

function QandA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question) return;
    setLoading(true);

    // Simulate an API response for demo purposes
    setTimeout(() => {
      setAnswer("This is a simulated answer. Replace with your own logic.");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="q-and-a">
      <div className="q-and-a-wrapper">
        <h2>Q & A</h2>
        <p>Ask your question and check back for your answers!</p>
        <form className="q-and-a-form" onSubmit={handleSubmit}>
          <label className="question-label" htmlFor="question">Question:</label>
          <input
            className="q-and-a-input"
            type="text"
            id="question"
            value={question}
            onChange={handleChange}
            required
          />
          <button className="q-and-a-send" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {answer && (
          <div className="q-and-a-response">
            <h4>Answer:</h4>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default QandA;
