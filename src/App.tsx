import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ call: 1 });
  const tick = () => {
    state.call += 1;
  }
  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);
  return (
    <div className="App">
      <header className="App-header" data-testid="header-element">
        {state.call}
      </header>
      <div
        dangerouslySetInnerHTML={{__html: ''}}
      />
    </div>
  );
}

export default App;
