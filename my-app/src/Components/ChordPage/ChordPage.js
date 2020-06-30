import React, {Component} from 'react';
import classes from './ChordPage.module.css';
import PlayButton from '../PlayButton';

class ChordPage extends React.Component {
    render() {
        return(
            <div className={classes.chordPage}>
                <div className={classes.chordContent}>
                    <div className={classes.titleBox}>
                        <p className={classes.title}>{this.props.chord.root}</p>
                        <p className={classes.subTitle}>{this.props.chord.type}</p>
                        <p className={classes.title}>{this.props.chord.extension}</p>
                    </div>
                    <div className={classes.chordNotes}>
                        <p>C</p>
                        <p>E</p>
                        <p>G</p>
                        <p>B</p>
                        <p>D</p>
                    </div>
                    <div className={classes.imgContainer}>
                        <img className={classes.diagram} src="hiclipart.com.png" alt="chord"/>
                    </div>
                    <ul className={classes.descriptions}>
                        <li>Simple.</li>
                        <li>Jazzy.</li>
                        <li>Thoughtful.</li>
                        <li>Soft.</li>
                    </ul>
                </div>
                <PlayButton />
            </div>
        );
    }
}

export default ChordPage;