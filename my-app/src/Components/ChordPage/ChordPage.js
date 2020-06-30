import React from 'react';
import classes from './ChordPage.module.css';

const chordPage = (props) => {
    return(
        <div className={classes.chordPage}>
            <div className={classes.titleBox}>
                <p className={classes.title}>{props.chord.root}</p>
                <p className={classes.subTitle}>{props.chord.type}</p>
                <p className={classes.title}>{props.chord.extension}</p>
            </div>
            <div className={classes.chordContent}>
                <div className={classes.imgContainer}>
                    <img className={classes.diagram} src="hiclipart.com.png"/>
                </div>
                <ul className={classes.descriptions}>
                    <li>Simple.</li>
                    <li>Jazzy.</li>
                    <li>Thoughtful.</li>
                    <li>Soft.</li>
                </ul>
            </div>
        </div>
    );
}

export default chordPage;