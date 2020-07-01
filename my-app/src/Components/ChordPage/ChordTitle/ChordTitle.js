import React from 'react';
import classes from './ChordTitle.module.css';

const chordTitle = (props) => {
    return (
        <div className={classes.titleBox}>
            <p className={classes.title}>
                {props.chord.root}
            </p>
            <p className={classes.subTitle}>
                {props.chord.type}
            </p>
            <p className={classes.title}>
                {props.chord.extension}
            </p>
        </div>
    );
};

export default chordTitle;