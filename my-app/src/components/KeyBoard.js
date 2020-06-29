import React from 'react';
import Key from './Key';
import Notes from '../Notes';

const Keyboard = () => {

    const keys = Notes.map(octave => 
        <div key={octave}>
            {octave.map(note => <Key key={note} note={note}/>)}
        </div>
    );

    return (
        <div>
            <p> hello world</p>
            {keys}
        </div>
    );
}

export default Keyboard;