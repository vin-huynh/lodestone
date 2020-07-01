import React from 'react';
import classes from './ChordPage.module.css';
import ChordTitle from './ChordTitle/ChordTitle';
import ChordNotes from './ChordNotes/ChordNotes';
import ChordDiagram from './ChordDiagram/ChordDiagram';
import ChordTraits from './ChordTraits/ChordTraits';

const chordPage = (props) => {
    return(
        <div className={classes.chordPage}>
            <ChordTitle chord={props.chord} />
            <ChordNotes notes={props.chord.notes} notePlayed={props.notePlayed}/>
            <ChordDiagram />
            <ChordTraits traits={props.chord.traits} />
        </div>
    );
}

export default chordPage;