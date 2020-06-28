import * as Tone from 'tone';

const piano = new Tone.Sampler({
    "C4" : "/samples/C4v1.wav",
}, () => {
	console.log("loaded");
}).toMaster();

export default piano;