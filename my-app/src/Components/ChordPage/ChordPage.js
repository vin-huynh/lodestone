import React from 'react';
import classes from './ChordPage.module.css';
import ChordTitle from './ChordTitle/ChordTitle';
import ChordNotes from './ChordNotes/ChordNotes';
import ChordDiagram from './ChordDiagram/ChordDiagram';
import ChordTraits from './ChordTraits/ChordTraits';

const chordPage = (props) => {

    const letterNotes = props.notes.map(note => note.replace(/\d/,""));

    return(
        <div className={classes.chordPage}>
            <ChordTitle root={props.root} quality={props.quality} />
            <ChordNotes notes={letterNotes} notePlayed={props.notePlayed}/>
            <ChordDiagram />
            <ChordTraits traits={props.traits} />
        </div>
    );
}

export default chordPage;