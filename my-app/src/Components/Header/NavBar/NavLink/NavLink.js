import React from 'react';
import classes from './NavLink.module.css';

const navLink = (props) => {
    return (
        <button className={classes.navLink}>
            {props.children}
        </button>
    );
};

export default navLink;