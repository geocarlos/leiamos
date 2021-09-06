import { Card, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { Context } from './ContextProvider';

const useStyles = makeStyles({
    learningCard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '10rem',
        height: 'fit-content',
        padding: '0 1rem',
        margin: '1rem',
        '& h1': {
            textAlign: 'center',
            margin: '.5rem'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

type LearningData = {
    text: string,
    audio: string,
    index?: number,
    trackEvent?: (index: number) => void
}

const LearningCard = (data: LearningData) => {
    const classes = useStyles();
    const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
    const {contentType} = useContext(Context);

    React.useEffect(() => {
        const path = require(`../assets/${data.audio}`);
        setAudio(new Audio(path.default));
    }, [data]);

    const handleClick = () => {
        if (audio) {
            audio.play();
        }
        if (data.trackEvent) {
            data.trackEvent(data.index || 0);
        }
    }

    return (
        <Card className={classes.learningCard} style={{
            color: `rgb(${Math.random() * 200}, ${Math.random() * 180}, ${Math.random() * 220})` 
        }} onClick={handleClick}>
            <h1>{contentType === 'numbers' ? data.index : data.text.toUpperCase()}</h1>
            <h1 style={{width: '100%'}}>{data.text}</h1>
        </Card>
    )
}

export default LearningCard;