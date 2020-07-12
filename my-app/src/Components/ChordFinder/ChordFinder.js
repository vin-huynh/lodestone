import React, { useState } from 'react';
import classes from './ChordFinder.module.css';
import RootSelector from './RootSelector/RootSelector';
import ShapeSelector from './ShapeSelector/ShapeSelector';

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const ChordFinder = (props) => {

    
    const [root,setRoot] = useState("C");
    const [shape,setShape] = useState(3);
    
    const selectRoot = (idx) => {
        setRoot(notes[idx]);
    }

    return (
        <div>
            <RootSelector selectRoot={selectRoot} root={root} />
            <ShapeSelector setShape={setShape} shape={shape} />
        </div>
    );
};

export default ChordFinder;