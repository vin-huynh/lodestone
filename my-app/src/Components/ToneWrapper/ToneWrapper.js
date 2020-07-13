import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './ToneWrapper.module.css';
import Header from '../Header/Header';
import ChordPage from '../ChordPage/ChordPage';
import ToneAudio from '../ToneAudio/ToneAudio';
import About from '../About/About';
import ChordCreator from '../ChordCreator/ChordCreator';
import ChordFinder from '../ChordFinder/ChordFinder';
import chords from '../../Chords';
import * as Tone from 'tone';

const chord = {
    root: "C",
    type: "MAJ",
    extension: "9",
    notes: ["C","E","G","B","D"],
    traits: ["simple","jazzy","thoughtful","soft"],
};

const ToneWrapper = (props) => {
    const [root,setRoot] = useState("C");
    const [intervals,setIntervals] = useState(chords[4].maj13.intervals);
    const [notePlayed, setNotePlayed] = useState("");

    const c = Tone.Frequency(root+"4").harmonize(intervals);
    console.log(c);

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path='/' exact render={() => <ChordPage chord={chord} notePlayed={notePlayed}/>} />
                <Route path='/explore' exact render={() => <ChordFinder />} />
                <Route path='/about' exact component={About} />
                <Route path='/create' exact component={ChordCreator} />
                <ToneAudio setNotePlayed={setNotePlayed} chord={c}/>
            </BrowserRouter>
            
        </div>
    );
};

export default ToneWrapper;