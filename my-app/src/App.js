import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ChordPage from './Components/ChordPage/ChordPage';

function App() {

  const chord = {
    root: "C",
    type: "MAJ",
    extension: "9",
    notes: ["C","E","G","B","D"],
    traits: ["simple","jazzy","thoughtful","soft"],
  };

  return (
    <div className="App">
      <Header />
      <ChordPage chord={chord}/>
    </div>
  );
}

export default App;
