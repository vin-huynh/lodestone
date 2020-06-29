import * as Tone from 'tone';
import Samples from '../Piano/Samples';

const piano = new Tone.Sampler(Samples, () => {
	console.log("loaded");
}).toMaster();

export default piano;