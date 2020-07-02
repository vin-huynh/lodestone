import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './ToneWrapper.module.css';
import Header from '../Header/Header';
import ChordPage from '../ChordPage/ChordPage';
import ToneAudio from '../ToneAudio/ToneAudio';
import About from '../About/About';
import ChordCreator from '../ChordCreator/ChordCreator';

const chord = {
    root: "C",
    type: "MAJ",
    extension: "9",
    notes: ["C","E","G","B","D"],
    traits: ["simple","jazzy","thoughtful","soft"],
};

const ToneWrapper = (props) => {
    const [notePlayed, setNotePlayed] = useState("");

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path='/' exact render={() => <ChordPage chord={chord} notePlayed={notePlayed}/>} />
                <Route path='/about' exact component={About} />
                <Route path='/create' exact component={ChordCreator} />
                <ToneAudio setNotePlayed={setNotePlayed}/>
            </BrowserRouter>
            
        </div>
    );
};

export default ToneWrapper;