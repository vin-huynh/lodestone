import React from 'react';
import classes from './Header.module.css';
import NavBar from './NavBar/NavBar';

const header = (props) => {
    return (
        <div className={classes.header}>
            <NavBar />
        </div>
    );
}

export default header;

