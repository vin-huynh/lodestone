import React, {useState} from 'react';
import classes from './ChordCreator.module.css';
import NoteButton from './NoteButton/NoteButton';

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const ChordCreator = (props) => {
    const [buttons, setButtons] = useState(new Array(12).fill(false));

    const toggleHandler = (idx) => {
        let updatedButtons = [...buttons];
        updatedButtons.splice(idx, 1, !buttons[idx]);
        setButtons(updatedButtons);
    }

    const noteButtons = notes.map((note,idx) => {
        return (
            <NoteButton key={idx}
                idx={idx} 
                note={note}
                toggleHandler={toggleHandler}
                toggled={buttons[idx]}/>
        );
    });

    const selectedNotes = notes.filter((note,idx) => buttons[idx]).map(note => {
        return (
            <p key={note}>{note}</p>
        );
    });

    const filler = <h1>Create a Chord!</h1>;

    const center = selectedNotes.length ? selectedNotes : filler;

    return (
        <div>
            <div className={classes.chordCreator}>
                <div className={classes.noteButtons}>
                    {noteButtons}
                    <div className={classes.selectedNotes}>
                        {center}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default ChordCreator;