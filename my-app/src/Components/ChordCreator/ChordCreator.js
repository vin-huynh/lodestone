import React from 'react';
import classes from './ChordCreator.module.css';

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const noteButtons = notes.map(note => <button>{note}</button>);

const chordCreator = (props) => {
    return (
        <div className={classes.chordCreator}>
            <div className={classes.noteButtons}>
                {noteButtons}
                <h1>Create a Chord!</h1>
            </div>
        </div>
    );
}

export default chordCreator;