import * as Tone from 'tone';
import Samples from './Samples';

const piano = new Tone.Sampler(Samples, () => {
	console.log("loaded piano");
}).chain(Tone.Master);

export default piano;