import * as Tone from 'tone';
import Samples from './Samples';

class Piano {
	constructor(cb) {
		this.sampler = new Tone.Sampler(Samples, () => {
			cb();
		}).chain(Tone.Master);
	}

	sampler() {
		return this.sampler;
	}
}

export default Piano;