import React, { useState } from 'react';
import classes from './ChordFinder.module.css';
import SelectorPage from './SelectorPage/SelectorPage';
import RootSelector from './RootSelector/RootSelector';
import ShapeSelector from './ShapeSelector/ShapeSelector';
import QualitySelector from './QualitySelector/QualitySelector';

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const ChordFinder = (props) => {

    
    const [root,setRoot] = useState("C");
    const [shape,setShape] = useState(3);
    const [quality,setQuality] = useState("maj");
    
    const selectRoot = (idx) => {
        setRoot(notes[idx]);
    }

    return (
        <div>
            <RootSelector selectRoot={selectRoot} root={root} />
            <ShapeSelector setShape={setShape} shape={shape} />
            <QualitySelector shape={shape} setQuality={setQuality}/>
            <SelectorPage title="result">
                <h1>{root+quality}</h1>
                <button>find this chord</button>
            </SelectorPage>
        </div>
    );
};

export default ChordFinder;