import React from 'react';
import classes from './ChordDiagram.module.css';

const src = `${process.env.PUBLIC_URL}/hiclipart.com.png`;

const ChordDiagram = (props) => {
    return (
        <div className={classes.diagramContainer}>
            <img 
                className={classes.diagram}
                src={src}
                alt="chord diagram"/>
        </div>
    );
};

export default ChordDiagram;