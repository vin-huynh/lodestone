import React, {useState} from 'react';
import classes from './ChordCreator.module.css';
import NoteButton from '../NoteButton/NoteButton';

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

    const filler = <p className={classes.filler}>Create a Chord!</p>;

    const center = selectedNotes.length ? selectedNotes : filler;

    const getIntervals = () => {
        const intervals = [];
        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i]) {
                intervals.push(i);
            }
        }
        while (intervals.length<3) {
            intervals.push(0);
        }
        return intervals;
    };

    const updateTone = () => {
        props.setRoot("C");
        props.setIntervals(getIntervals());
    }

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
            <div className={classes.save}>
                <h2>Save Your Chord and Listen to It!</h2>
                <button onClick={updateTone}>Save Your Chord</button>
            </div>
        </div>
    );
}

export default ChordCreator;