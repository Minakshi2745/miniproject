import React, { useState } from 'react';
import './App.css';

function App() {
  const [sourceType, setSourceType] = useState('url');
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const analyzeContent = async () => {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: input, source_type: sourceType })
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="container">
      <h1>I.R.I.S.</h1>
      <p>Intelligent Review of Information Sources</p>
      <div className="tab-switch">
        <button onClick={() => setSourceType('url')} className={sourceType === 'url' ? 'active' : ''}>URL</button>
        <button onClick={() => setSourceType('text')} className={sourceType === 'text' ? 'active' : ''}>Text</button>
      </div>
      <textarea
        placeholder={sourceType === 'url' ? 'https://example.com/article' : 'Paste the news content here...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={analyzeContent}>Analyze Content</button>
      {result && (
        <div className="result">
          <h3>Analysis Result:</h3>
          <p><strong>Summary:</strong> {result.content_summary}</p>
          <p><strong>Verdict:</strong> {result.verdict}</p>
        </div>
      )}
    </div>
  );
}

export default App;
