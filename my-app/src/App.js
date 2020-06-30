import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Keyboard from './Components/Keyboard';
import ChordPage from './Components/ChordPage/ChordPage';

function App() {

  const chord = {
    root: "C",
    type: "MAJ",
    extension: "7",
  };

  return (
    <div className="App">
      <Header />
      <ChordPage chord={chord}/>
    </div>
  );
}

export default App;
