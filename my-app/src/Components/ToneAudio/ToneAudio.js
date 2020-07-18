import React from 'react';
import * as Tone from 'tone';
import Piano from '../../Piano/Piano';
import PlayButton from './PlayButton/PlayButton';
import classes from './ToneAudio.module.css';
import Violins from '../../Violins/Violins';
import Pizz from '../../Violins/Pizz';
import ViolinPizz from '../../Violins/Pizz';

class ToneAudio extends React.Component {

    constructor(props) {
        super(props);

        this.piano = new Piano(() => props.setPianoLoaded(true));
        this.violins = new Violins(() => props.setViolinsLoaded(true));
        this.pizz = new ViolinPizz(() => props.setPizzLoaded(true));

        this.melody = new Tone.Loop(time => {
            if(Math.random()*2<1){
                const noteIdx = Math.floor(Math.random()*props.notes.length);
                const note = props.notes[noteIdx];
                this.piano.sampler.triggerAttack(note);
                props.setNotePlayed(note);
            }
        }, "4n");

        this.bass = new Tone.Loop(time => {
            if(Math.random()*2<1.3){
                const noteIdx = Math.floor(Math.random()*props.notes.length);
                const note = Tone.Frequency(props.notes[noteIdx]).transpose(-24);
                this.piano.sampler.triggerAttack(note);
            }
        }, "2n");

        this.harmony = new Tone.Loop(time => {
            if(Math.random()*2<0.7){
                const notes = [];
                const n = Math.floor(Math.random()*3+1);
                for(let i = 0; i < n; i++) {
                    const noteIdx = Math.floor(Math.random()*props.notes.length);
                    const note = Tone.Frequency(props.notes[noteIdx]).transpose(0);
                    notes.push(note);
                }
                const duration = (Math.floor(Math.random()*4+1))+"n";
                if(Math.random()<0.25)
                    this.pizz.sampler.triggerAttackRelease(notes,duration);
                else
                    this.violins.sampler.triggerAttackRelease(notes,duration);
            }
        }, "2m");

        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.notes !== this.props.notes) {
            if (Tone.Transport.state === "started") {
                this.togglePlay();
            }

            this.melody.dispose();
            this.bass.dispose();
            this.harmony.dispose();
            
            this.melody = new Tone.Loop(time => {
                if(Math.random()*2<1){
                    const noteIdx = Math.floor(Math.random()*this.props.notes.length);
                    const note = this.props.notes[noteIdx];
                    this.piano.sampler.triggerAttack(note);
                    this.props.setNotePlayed(note);
                }
            }, "4n");
    
            this.bass = new Tone.Loop(time => {
                if(Math.random()*2<1.3){
                    const noteIdx = Math.floor(Math.random()*this.props.notes.length);
                    const note = Tone.Frequency(this.props.notes[noteIdx]).transpose(-24);
                    this.piano.sampler.triggerAttack(note);
                }
            }, "2n");

            this.harmony = new Tone.Loop(time => {
                if(Math.random()*2<0.7){
                    const notes = [];
                    const n = Math.floor(Math.random()*3+1);
                    for(let i = 0; i < n; i++) {
                        const noteIdx = Math.floor(Math.random()*this.props.notes.length);
                        const note = Tone.Frequency(this.props.notes[noteIdx]).transpose(0);
                        notes.push(note);
                    }
                    const duration = (Math.floor(Math.random()*4+1))+"n";
                    if(Math.random()<0.25)
                        this.pizz.sampler.triggerAttackRelease(notes,duration);
                    else
                        this.violins.sampler.triggerAttackRelease(notes,duration);
                }
            }, "2m");

        }
    }

    togglePlay() {
        if (Tone.Transport.state === "started") {
            Tone.Transport.stop();
            console.log("stopping music..");
        } else {
            this.bass.start(0);
            this.melody.start(0);
            this.harmony.start(0);
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