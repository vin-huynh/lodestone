import React from 'react';
import classes from './NavTitle.module.css';

const navTitle = (props) => {
    return (
        <div className={classes.titleBox}>
            <p className={classes.title}>LODESTONE:</p>
            <p className={classes.subTitle}>THE CHORD FINDER</p>
        </div>
    );
};

export default navTitle;