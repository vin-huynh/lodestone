import React, { useState } from 'react';
import classes from './QualitySelector.module.css';
import SelectorPage from '../SelectorPage/SelectorPage';
import chords from '../../../Chords';

const QualitySelector = (props) => {

    const [selected, setSelected] = useState("maj");  

    const qualities = Object.entries(chords[props.shape-3]).map(entry => {
        const selectedClass = entry[0]===selected ? " " + classes.selected : "";
        return (
            <button key={entry}
                    onClick={() => {
                        props.setQuality(entry[0]);
                        setSelected(entry[0]);
                    }}
                    className={classes.btn + selectedClass}>
                {entry[0]}
            </button>
    )});

    return (
        <SelectorPage title="select a chord quality">
            <div className={classes.qualities}>
                {qualities}
            </div>
        </SelectorPage>
    );
}

export default QualitySelector;