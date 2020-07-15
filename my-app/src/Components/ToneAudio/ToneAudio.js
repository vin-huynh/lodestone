import React from 'react';
import * as Tone from 'tone';
import Piano from '../../Piano/Piano';
import PlayButton from './PlayButton/PlayButton';
import classes from './ToneAudio.module.css';

class ToneAudio extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.notes);

        this.melody = new Tone.Loop(time => {
            if(Math.random()*2<1){
                const noteIdx = Math.floor(Math.random()*props.notes.length);
                const note = props.notes[noteIdx];
                Piano.triggerAttack(note);
                props.setNotePlayed(note);
            }
        }, "4n");

        this.bass = new Tone.Loop(time => {
            if(Math.random()*2<1.3){
                const noteIdx = Math.floor(Math.random()*props.notes.length);
                const note = Tone.Frequency(props.notes[noteIdx]).transpose(-24);
                Piano.triggerAttack(note);
            }
        }, "2n");

        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.notes !== this.props.notes) {
            if (Tone.Transport.state === "started") {
                this.togglePlay();
            }

            this.melody.dispose();
            this.bass.dispose();
            
            this.melody = new Tone.Loop(time => {
                if(Math.random()*2<1){
                    const noteIdx = Math.floor(Math.random()*this.props.notes.length);
                    const note = this.props.notes[noteIdx];
                    Piano.triggerAttack(note);
                    this.props.setNotePlayed(note);
                }
            }, "4n");
    
            this.bass = new Tone.Loop(time => {
                if(Math.random()*2<1.3){
                    const noteIdx = Math.floor(Math.random()*this.props.notes.length);
                    const note = Tone.Frequency(this.props.notes[noteIdx]).transpose(-24);
                    Piano.triggerAttack(note);
                }
            }, "2n");
    
        }
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