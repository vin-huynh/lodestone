import React from 'react';
import Piano from '../Piano';

const key = (props) => {
    return(
        <button onClick={() => Piano.triggerAttack(props.note)}>
            {props.note}
        </button>
    );
}

export default key;