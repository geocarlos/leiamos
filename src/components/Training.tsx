import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import numbers from '../assets/text/numbers.json';
import LearningCard from './LearningCard';
import OverlayImage from './OverlayImage';
import bigThumImage from '../assets/images/thumbup.png';

const useStyles = makeStyles({
    learning: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        maxWidth: '85%',
        background: 'lightgrey',
        margin: 'auto',
        height: '80%'
    },
    select: {
        display: 'block',
        fontSize: '.75rem',
        fontFamily: 'sans-serif',
        fontWeight: 700,
        color: '#444',
        lineHeight: 1.3,
        padding: '.6em 1.4em .5em .8em',
        boxSizing: 'border-box',
        margin: 0,
        border: '1px solid #aaa',
        boxShadow: '0 1px 0 1px rgba(0,0,0,.04)',
        borderRadius: '.5em',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none'
    }
});

const Training = () => {
    const classes = useStyles();
    const [language, setLanguage] = React.useState<'en' | 'pt'>('en');
    const [points, setPoints] = React.useState(0);
    const [correctAnswer, setCorrectAnswer] = React.useState<number | null>(null);

    const askNumber = () => {
        const index = Math.floor(Math.random() * 10);
        setCorrectAnswer(index);
        const audio = new Audio(require(`../assets/${Object.values(numbers)[index][language].audio}`).default);
        audio.play();
    }

    React.useEffect(() => {
        setTimeout(askNumber, 2000);
    }, []);

    const handleLanguageChange = (event: any) => {
        askNumber();
        setLanguage(event.target.value as 'en' | 'pt');
    }

    const playCorrectAnswer = () => {
        if (typeof correctAnswer !== 'number') return;
        const audio = new Audio(require(`../assets/${Object.values(numbers)[correctAnswer][language].audio}`).default);
        audio.play();
    }

    return (
        <div className={classes.learning}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '.4rem'}}>
                <div style={{margin: '0 1rem', fontWeight: 600, color: 'purple'}}>Points: {points}</div>
                <div>
                    <Button size="small" variant="contained" onClick={playCorrectAnswer}>Play Correct Answer</Button>
                </div>
                <select className={classes.select} value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </select>
            </div>
            {Object.entries(numbers).map(([key, value], i) => (
                <React.Fragment key={key}>
                    <LearningCard 
                        text={value[language].text} 
                        audio={value[language].audio} 
                        type={'numbers'} 
                        index={i}
                        trackEvent={(i: number) => {
                                if (i === correctAnswer) {
                                    setPoints(prev => prev + 1);
                                    setCorrectAnswer(null);
                                } else if (correctAnswer) {
                                    setPoints(prev => prev - 1);
                                    setCorrectAnswer(null);
                                }
                                setTimeout(askNumber, 2000)
                            }} />
                </React.Fragment>
            ))}
            <OverlayImage image={bigThumImage} />
        </div>
    )
}

export default Training;