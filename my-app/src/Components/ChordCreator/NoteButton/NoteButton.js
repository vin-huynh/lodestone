import React from 'react';
import classes from './NoteButton.module.css';

const noteButton = (props) => {
    const toggled = props.toggled ? classes.on : classes.off;


    return (
        <button className={toggled + " " + classes.noteButton}
                onClick={() => props.toggleHandler(props.idx)}>
            {props.note}
        </button>
    );
}

export default noteButton;