import React from 'react';
import classes from './NavBar.module.css';
import NavTitle from './NavTitle/NavTitle';
import NavLink from './NavLink/NavLink';

const navBar = (props) => {
    return (
        <div className={classes.navBar}>
            <NavTitle />
            <div className={classes.navLinks}>
                <NavLink to='/'>
                    EXPLORE
                </NavLink>
                <NavLink to='/create'>
                    CREATE
                </NavLink>
                <NavLink to='/about'>
                    ABOUT
                </NavLink>
            </div>
        </div>
    );
};

export default navBar;