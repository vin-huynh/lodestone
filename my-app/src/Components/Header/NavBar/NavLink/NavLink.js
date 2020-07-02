import React from 'react';
import { Router, Link } from 'react-router-dom';
import classes from './NavLink.module.css';

const navLink = (props) => {
    return (
        <Link className={classes.navLink} to={props.to}>
                {props.children}
        </Link>
    );
};

export default navLink;