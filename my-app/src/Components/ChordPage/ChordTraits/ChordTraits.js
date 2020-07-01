import React from 'react';
import classes from './ChordTraits.module.css';

const ChordTraits = (props) => {
    const traitList = props.traits.map(trait => {
        const formattedTrait = trait.charAt(0).toUpperCase() + trait.slice(1).toLowerCase();
        return <li key={trait}>{formattedTrait}.</li>;
    });

    return (
        <ul className={classes.traitList}>
            {traitList}
        </ul>
    );
};

export default ChordTraits;