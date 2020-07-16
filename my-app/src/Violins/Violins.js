import * as Tone from 'tone';
import Samples from './Samples';

const r = new Tone.Freeverb(0.9,4000);
const sw = new Tone.StereoWidener(0.9);
const vol = new Tone.Volume(-18);
const f = new Tone.Filter(4200, "lowpass");

const violins = new Tone.Sampler(Samples, () => {
	console.log("loaded violins");
}).chain(f, r, sw, vol, Tone.Master);

export default violins;