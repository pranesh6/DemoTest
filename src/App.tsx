import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ call: 1 });
  const tick = () => {
    state.call += 
  }
  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);
  return (
    <div className="App">
      <header className="App-header" data-testid="header-element">
        {state.call}
      </header>
    </div>
  );
}

export default App;
