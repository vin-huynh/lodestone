import React from 'react';
import * as Tone from 'tone';
import Piano from '../Piano/Piano';

const chord = ["C4","E4","G4","B4","D5"];

const upper = new Tone.Loop(time => {
    if(Math.random()*2<1){
        const noteIdx = Math.floor(Math.random()*5);
	    Piano.triggerAttack(chord[noteIdx]);
    }
}, "4n");

const lower = new Tone.Loop(time => {
    if(Math.random()*2<1.3){
        const noteIdx = Math.floor(Math.random()*5);
        const note = Tone.Frequency(chord[noteIdx]).transpose(-24);
	    Piano.triggerAttack(note);
    }
}, "2n");


lower.start(0);
upper.start(0);


const play = () => {
    Tone.Transport.start();
    console.log("started");
};

const playButton = (props) => {
    return (
        <button onClick={play}>
            ▷
        </button>
    );
};

export default playButton;