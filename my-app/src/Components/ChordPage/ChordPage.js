import React from 'react';
import classes from './ChordPage.module.css';
import ChordTitle from './ChordTitle/ChordTitle';
import ChordNotes from './ChordNotes/ChordNotes';
import ChordDiagram from './ChordDiagram/ChordDiagram';
import ChordTraits from './ChordTraits/ChordTraits';

class ChordPage extends React.Component {
    render() {
        return(
            <div className={classes.chordPage}>
                <ChordTitle chord={this.props.chord} />
                <ChordNotes notes={this.props.chord.notes} />
                <ChordDiagram />
                <ChordTraits traits={this.props.chord.traits} />
            </div>
        );
    }
}

export default ChordPage;