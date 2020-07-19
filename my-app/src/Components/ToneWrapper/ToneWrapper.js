import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import classes from './ToneWrapper.module.css';
import Header from '../Header/Header';
import ChordPage from '../ChordPage/ChordPage';
import ToneAudio from '../ToneAudio/ToneAudio';
import About from '../About/About';
import ChordCreator from '../ChordCreator/ChordCreator';
import ChordFinder from '../ChordFinder/ChordFinder';
import chords from '../../Chords';
import * as Tone from 'tone';
import LoadingPage from '../LoadingPage/LoadingPage';

const ToneWrapper = (props) => {
    const [root,setRoot] = useState("C");
    const [quality,setQuality] = useState("maj");
    const [shape,setShape] = useState(3);
    const [intervals,setIntervals] = useState(chords[0].maj.intervals);
    const [traits,setTraits] = useState(chords[0].maj.traits);
    const [notes,setNotes] = useState(Tone.Frequency(root+"4").harmonize(intervals).map(note => note.toNote()));
    const [notePlayed, setNotePlayed] = useState("");
    const [pianoLoaded, setPianoLoaded] = useState(false);
    const [violinsLoaded, setViolinsLoaded] = useState(false);
    const [pizzLoaded, setPizzLoaded] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setNotes(Tone.Frequency(root+"4").harmonize(intervals).map(note => note.toNote()));
    }, [root]);

    useEffect(() => {
        setNotes(Tone.Frequency(root+"4").harmonize(intervals).map(note => note.toNote()));
    }, [intervals]);

    useEffect(() => {
        setIntervals(chords[shape-3][quality].intervals);
        setTraits(chords[shape-3][quality].traits);
    }, [quality]);

    useEffect(() => {
        setLoaded(pianoLoaded && violinsLoaded && pizzLoaded);
    }, [pianoLoaded, violinsLoaded, pizzLoaded]);

    useEffect(() => {
        
    }, [loaded]);
    
    return (
        <div>
            <HashRouter>
                <Header />
                {!loaded ? <LoadingPage /> : <Redirect to="/chord" />}
                <Route path='/chord' exact render={() => <ChordPage  root={root}
                                                                quality={quality}
                                                                notes={notes}
                                                                traits={traits}
                                                                notePlayed={notePlayed} />} />
                <Route path='/explore' exact render={() => <ChordFinder setRoot={setRoot}
                                                                        setShape={setShape}
                                                                        setQuality={setQuality} />} />
                <Route path='/about' exact component={About} />
                <Route path='/create' exact render={() => <ChordCreator setRoot={setRoot}
                                                                        setIntervals={setIntervals} />} />
                <ToneAudio  setNotePlayed={setNotePlayed}
                            notes={notes} 
                            setPianoLoaded={setPianoLoaded} 
                            setViolinsLoaded={setViolinsLoaded}
                            setPizzLoaded={setPizzLoaded} />
            </HashRouter>
            
        </div>
    );
};

export default ToneWrapper;