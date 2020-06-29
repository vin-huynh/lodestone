const letters = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const octaves = [1, 2, 3, 4, 5, 6, 7];

const notes = octaves.map(octave =>
    letters.map(letter => letter+octave)
);

export default notes;