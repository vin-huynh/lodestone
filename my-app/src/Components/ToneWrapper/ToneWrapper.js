import React, { useState } from 'react';
import classes from './ToneWrapper.module.css';
import Header from '../Header/Header';
import ChordPage from '../ChordPage/ChordPage';
import ToneAudio from '../ToneAudio/ToneAudio';

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
            <Header />
            <ChordPage chord={chord} notePlayed={notePlayed}/>
            <ToneAudio setNotePlayed={setNotePlayed}/>
        </div>
    );
};

export default ToneWrapper;