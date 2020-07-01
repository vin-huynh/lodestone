import React from 'react';
import classes from './NavBar.module.css';
import NavTitle from './NavTitle/NavTitle';
import NavLink from './NavLink/NavLink';

const navBar = (props) => {
    return (
        <div className={classes.navBar}>
            <NavTitle />
            <div className={classes.navLinks}>
                <NavLink>
                    EXPLORE
                </NavLink>
                <NavLink>
                    FIND
                </NavLink>
                <NavLink>
                    CREATE
                </NavLink>
            </div>
        </div>
    );
};

export default navBar;