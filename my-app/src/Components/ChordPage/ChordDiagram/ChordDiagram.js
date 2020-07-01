import React from 'react';
import classes from './ChordDiagram.module.css';

const ChordDiagram = (props) => {
    return (
        <div className={classes.diagramContainer}>
            <img 
                className={classes.diagram}
                src="hiclipart.com.png" 
                alt="chord diagram"/>
        </div>
    );
};

export default ChordDiagram;