const notes = ["A2","A3","B2","B4","C4","D3","D5","E4","F#3","G2","G4"];
const samplePath = "/ViolinsSamples/";
const instrument = "VlnEns_Pizz_";
const velocity = "_v1_rr2";

const samples = {};

notes.forEach(note => {
    let noteFilename = note;
    if(note.includes("#")) {
        noteFilename = note.replace("#","sharp");
    }
    samples[note] = `${samplePath+instrument+noteFilename+velocity}.wav`;
});

console.log(samples);

export default samples;