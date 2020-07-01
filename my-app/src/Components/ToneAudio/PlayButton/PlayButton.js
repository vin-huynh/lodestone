import React from 'react';
import classes from './PlayButton.module.css';

const playButton = (props) => {
    return (
        <button onClick={props.togglePlay} className={classes.playButton}>
            ▷
        </button>
    );
};

export default playButton;