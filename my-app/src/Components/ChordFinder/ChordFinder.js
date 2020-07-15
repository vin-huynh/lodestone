import React, { useState } from 'react';
import classes from './ChordFinder.module.css';
import SelectorPage from './SelectorPage/SelectorPage';
import RootSelector from './RootSelector/RootSelector';
import ShapeSelector from './ShapeSelector/ShapeSelector';
import QualitySelector from './QualitySelector/QualitySelector';
import { Router, Link } from 'react-router-dom';

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const ChordFinder = (props) => {

    const [root,setRoot] = useState("C");
    const [shape,setShape] = useState(3);
    const [quality,setQuality] = useState("maj");
    
    const selectRoot = (idx) => {
        setRoot(notes[idx]);
    }

    const submitChord = () => {
        props.setRoot(root);
        props.setShape(shape);
        props.setQuality(quality);
    }

    return (
        <div>
            <RootSelector root={root} selectRoot={selectRoot}  />
            <ShapeSelector shape={shape} setShape={setShape}  />
            <QualitySelector shape={shape} setQuality={setQuality}/>
            <SelectorPage title="result">
                <div className={classes.result}>
                    <h1>{root+quality}</h1>
                    <Link   to="/" onClick={submitChord}
                            className={classes.link}>
                        Find this Chord
                    </Link>
                </div>
            </SelectorPage>
        </div>
    );
};

export default ChordFinder;