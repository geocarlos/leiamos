import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    '@keyframes feedback': {
        from: {
            height: '0%',
            width: '0%'
        },
        to: {
            height: '100%',
            width: '100%'
        }
    },
    overlayImage: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        width: '90%',
        margin: 0,
        '& div img': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            animation: '$feedback 500ms linear'
        }
    }
})

const OverlayImage = ({image}: any) => {
    const classes = useStyles();
    console.log(image);
    return (
        <div className={classes.overlayImage}>
            <div>
                <img src={image} alt="Feedback"/>
            </div>
        </div>
    )
}

export default OverlayImage;