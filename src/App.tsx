import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ call: '' });
  state.call = 'as';
  return (
    <div className="App">
      <header className="App-header" data-testid="header-element">
        Empty
      </header>
    </div>
  );
}

export default App;
