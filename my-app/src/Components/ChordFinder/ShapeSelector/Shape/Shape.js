import React from 'react';
import classes from './Shape.module.css';

const Shape = (props) => {

    const points = [];
    const angle = 2 * Math.PI / props.vertices;
    for (let i = 0; i < props.vertices; i++) {
        const x = props.radius * (1 + Math.cos(i * angle));
        const y = props.radius * (1 + Math.sin(i * angle));
        points.push(`${x},${y}`);
    }
    const path = points.join(' ');

    return (
        <svg height={props.radius*2} width={props.radius*2} className={classes.shape}>
            <polygon points={path} className={classes.poly} />
        </svg>
    );
}

export default Shape;