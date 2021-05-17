import React, { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <CharLimit />
    </div>
  );
}

function CharLimit() {
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState('');

  useEffect(() => {
    document.title =
      input.length > 240
        ? '0 characters left'
        : `${240 - input.length} characters left`;
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(input);
  };

  return (
    <React.Fragment>
      <p>
        {input.length > 240
          ? '0 characters left'
          : `${240 - input.length} characters left`}
      </p>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={input} placeholder="Type" />
        <button
          type="submit"
          disabled={input.length === 0 || input.length > 240}
        >
          Submit
        </button>
      </form>
      <p>{submit}</p>
    </React.Fragment>
  );
}
