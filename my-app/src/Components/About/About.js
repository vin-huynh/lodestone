import React from 'react';
import classes from './About.module.css';

const about = (props) => {
    return (
        <div className={classes.about}>
            <div className={classes.aboutMain}>
                <h1>ABOUT LODESTONE</h1>
                <p>
                    Lodestone is a chord dictionary
                    equipped with audiovisual tools
                    to facilitate exploration
                    and inspiration.
                </p>
            </div>
            <div className={classes.aboutHelp}>
                <h2>HOW TO USE LODESTONE</h2>
                <div className={classes.aboutHelpContent}>
                    <div>
                        <h3>EXPLORE</h3>
                        <h4>Need inspiration?</h4>
                        <p>
                            The EXPLORE button will find you a chord page
                            to help kickstart those musical gears! 
                        </p>
                    </div>
                    <div>
                        <h3>CREATE</h3>
                        <h4>Already know what you're looking for?</h4>
                        <p>
                            The CREATE button launches a chord builder
                            for making your own chords from scratch!
                        </p>
                    </div>
                    <div>
                        <h3>PLAY</h3>
                        <h4>Tired of theory?</h4>
                        <p>
                            Hear those intervals interact in your chord
                            by toggling the play button
                            located in the bottom right of your screen!
                            Press again to toggle the music off!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;