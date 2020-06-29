import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.navBar}>
            <div className={classes.titleBox}>
                <p className={classes.title}>LODESTONE:</p>
                <p className={classes.subTitle}>THE CHORD FINDER</p>
            </div>
            <div className={classes.navLinks}>
                <button>
                    EXPLORE
                </button>
                <button>
                    FIND
                </button>
                <button>
                    CREATE
                </button>
            </div>
        </div>
    );
}

export default header;

