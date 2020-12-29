import classes from '*.module.css';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    overlayImage: {

    }
})

const OverlayImage = (image: any) => {
    const classes = useStyles();
    return (
        <div className={classes.overlayImage}>
            <img src={image} alt="Feedback image"/>
        </div>
    )
}

export default OverlayImage;