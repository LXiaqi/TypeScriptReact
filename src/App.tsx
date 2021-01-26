import React from 'react';
// import logo from './logo.svg';
import './App.less';
import Hello from './components/hello/hello'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Type Script" symbol={3}/>
      </header>
    </div>
  );
}

export default App;
