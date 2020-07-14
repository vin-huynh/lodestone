import React from 'react';
import classes from './ChordTitle.module.css';

const chordTitle = (props) => {
    return (
        <div className={classes.titleBox}>
            <p className={classes.title}>
                {props.root}
            </p>
            <p className={classes.subTitle}>
                {props.quality}
            </p>
        </div>
    );
};

export default chordTitle;