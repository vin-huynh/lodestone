import React, { useState} from 'react';
import classes from './RootSelector.module.css';
import SelectorPage from '../SelectorPage/SelectorPage';
import NoteButton from '../../NoteButton/NoteButton';

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const RootSelector = (props) => {

    const noteButtons = notes.map((note,idx) => {
        return (
            <NoteButton key={idx}
                idx={idx} 
                note={note}
                toggleHandler={props.selectRoot}
                toggled={note === props.root}
                singleToggle />
        );
    });

    return (
        <SelectorPage title="select a chord root">
            <div className={classes.noteButtons}>
                {noteButtons}
                <h1>{props.root}</h1>
            </div>
        </SelectorPage>
    );
}

export default RootSelector;