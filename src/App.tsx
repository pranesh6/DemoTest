import React from 'react'
import './App.css'
const headerText = [,1,,2]

function App (): JSX.Element {
  const headerText = 'Expected Output'
  return (
    <div className="App">
      <header className="App-header" data-testid="header-element">
        {headerText}
      </header>
    </div>
  )
}

export default App
