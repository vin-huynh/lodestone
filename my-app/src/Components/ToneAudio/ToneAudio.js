import React from 'react';
import * as Tone from 'tone';
import Piano from '../../Piano/Piano';
import PlayButton from './PlayButton/PlayButton';
import classes from './ToneAudio.module.css';

const chord = ["C4","E4","G4","B4","D5"];

class ToneAudio extends React.Component {

    constructor(props) {
        super(props);

        this.melody = new Tone.Loop(time => {
            if(Math.random()*2<1){
                const noteIdx = Math.floor(Math.random()*5);
                const note = chord[noteIdx];
                Piano.triggerAttack(note);
                this.props.setNotePlayed(note);
            }
        }, "4n");

        this.bass = new Tone.Loop(time => {
            if(Math.random()*2<1.3){
                const noteIdx = Math.floor(Math.random()*5);
                const note = Tone.Frequency(chord[noteIdx]).transpose(-24);
                Piano.triggerAttack(note);
            }
        }, "2n");

        this.togglePlay = this.togglePlay.bind(this);
        console.log(this);
    }

    togglePlay() {
        if (Tone.Transport.state === "started") {
            Tone.Transport.stop();
            console.log("stopping music..");
        } else {
            this.bass.start(0);
            this.melody.start(0);
            Tone.Transport.start();
            console.log("playing music..");
        }
    };

    render() {
        return (
            <div className={classes.toneAudio}>
                <PlayButton togglePlay={this.togglePlay}/>
            </div>
        );
    }    
}

export default ToneAudio;