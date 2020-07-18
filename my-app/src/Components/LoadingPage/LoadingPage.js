import React from 'react';
import classes from './LoadingPage.module.css';

const LoadingPage = (props) => {
    return(
        <div className={classes.loadingPage}>
            <p className={classes.title}>
                LOADING AUDIO SAMPLES.. PLEASE WAIT
            </p>
        </div>
    );
};

export default LoadingPage;