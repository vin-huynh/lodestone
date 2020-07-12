import React from 'react';
import classes from './SelectorPage.module.css';

const selectorPage = (props) => {
    return (
        <div className={classes.selectorPage}>
            <h2 className={classes.title}>{props.title.toUpperCase()}</h2>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

export default selectorPage;