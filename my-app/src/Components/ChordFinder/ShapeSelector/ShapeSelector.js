import React from 'react';
import classes from './ShapeSelector.module.css';
import SelectorPage from '../SelectorPage/SelectorPage';
import Shape from './Shape/Shape';

const shapes = ["triad","seventh","ninth","eleventh","thirteenth"];

const ShapeSelector = (props) => {

    const increaseVertices = () => {
        if(props.shape < 7)
            props.setShape(props.shape+1);
    }

    const decreaseVertices = () => {
        if(props.shape > 3)
            props.setShape(props.shape-1);
    }

    return (
        <SelectorPage title="select a chord shape">
            <div className={classes.shapeSelector}>
                <button onClick={decreaseVertices}
                        className={classes.btn + " " + classes.subBtn}>{"<"}</button>
                <div className={classes.shape}>
                    <Shape  vertices={props.shape} radius={150} />
                </div> 
                <button onClick={increaseVertices}
                        className={classes.btn + " " + classes.addBtn}>{">"}</button>
                <h3 className={classes.shapeName}>{shapes[props.shape-3].toUpperCase()}</h3>
            </div>
        </SelectorPage>
    );
}

export default ShapeSelector;