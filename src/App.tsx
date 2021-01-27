import React from 'react';
// import logo from './logo.svg';
import './App.less';
import Hello from './components/hello/hello'
import HelloTwo from './components/hello_redux/helloTwo'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Type Script" symbol={3}/>
        <HelloTwo name="New Year" enthusiasmLevel={1}/>
      </header>
    </div>
  );
}

export default App;
