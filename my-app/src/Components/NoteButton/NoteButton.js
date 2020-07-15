import React from 'react';
import classes from './NoteButton.module.css';

const noteButton = (props) => {
    const toggled = props.toggled ? (props.singleToggle ? classes.onSingle : classes.on) : classes.off;


    return (
        <button className={toggled + " " + classes.noteButton}
                onClick={() => props.toggleHandler(props.idx)}>
            {props.note}
        </button>
    );
}

export default noteButton;