import React from 'react';
import classes from './QualitySelector.module.css';
import SelectorPage from '../SelectorPage/SelectorPage';
import chords from '../../../Chords';

const QualitySelector = (props) => {

    const qualities = Object.entries(chords[props.shape-3]).map(entry => 
        <button key={entry}
                onClick={() => props.setQuality(entry[0])}>
            {entry[0]}
        </button>
    );

    return (
        <SelectorPage title="select a chord quality">
            {qualities}
        </SelectorPage>
    );
}

export default QualitySelector;