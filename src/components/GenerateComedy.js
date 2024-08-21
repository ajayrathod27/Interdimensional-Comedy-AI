import React, { useState } from 'react';

const GenerateComedy = () => {
  const [comedyType, setComedyType] = useState('');
  const [theme, setTheme] = useState('');
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const response = `Generated a ${comedyType} comedy show about ${theme}.`;
    setResult(response);
  };

  return (
    <div className="container my-5">
      <h2>Generate Your Comedy Show</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Comedy Type</label>
          <select className="form-select" value={comedyType} onChange={(e) => setComedyType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="standup">Stand-Up Comedy</option>
            <option value="sketch">Sketch Comedy</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Theme</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-dark" onClick={handleGenerate}>Generate Comedy</button>
      </form>
      {result && (
        <div className="mt-4">
          <h3>Generated Comedy:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateComedy;
