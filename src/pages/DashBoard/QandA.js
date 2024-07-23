import React, { useState } from "react";
import axios from "axios";
import "../DashBoard/index.css";

const OPENAI_API_KEY = process.env.REACT_APP_API_KEY;

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
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: question,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
      setAnswer(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error fetching answer:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
      setAnswer("Sorry, something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section id="q-and-a">
  
      <div className="q-and-a-wrapper"> 
        <h2>Q & A</h2>
        <p>Ask your question and check back for your answers!</p>
        <form className="q-and-a-form" onSubmit={handleSubmit}>
          <label className="question-label" htmlFor="question">Question:</label>
          <input className="q-and-a-input"
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
