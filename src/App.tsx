import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ call: 1 });
  const tick = () => {
    state.call += 1;
  }
  const dist = 20;
  const loc = null;
if (dist < 10)
    loc = "here";
else
    loc = "there";
  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);
  return (
    <div className="App">
      <header className="App-header" data-testid="header-element">
        {state.call}
      </header>
      <div alt="
<x" title="/>
<img src=url404 onerror=alert(1)>"/>
      <div
        dangerouslySetInnerHTML={{__html: ''}}
      />
    </div>
  );
}

export default App;
