import React from 'react';
import classes from './SelectorPage.module.css';

const selectorPage = (props) => {
    return (
        <div>
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

export default selectorPage;