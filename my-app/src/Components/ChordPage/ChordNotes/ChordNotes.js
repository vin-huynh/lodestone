import React from 'react';
import classes from './ChordNotes.module.css';

const chordNotes = (props) => {

    const noteList = props.notes.map(note => {
        return <li key={note} className={classes.note}>{note}</li>;
    });

    return (
        <ul className={classes.noteList}>
            {noteList}
        </ul>
    );
};

export default chordNotes;