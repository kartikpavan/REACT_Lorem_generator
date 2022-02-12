import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <article>
      <h7 className="heading">Lorem Ipsum Generator</h7>
      <form onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraph : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <span>maximum paragraphs are 8</span>
      <section>
        {text.map((t, index) => {
          return <p key={index}> {t} </p>;
        })}
      </section>
    </article>
  );
}

export default App;
