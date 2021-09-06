import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { Context } from './ContextProvider';
import LearningCard from './LearningCard';

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

const Learning = () => {
    const classes = useStyles();
    const [language, setLanguage] = React.useState<'en' | 'pt'>('en');
    const {content} = useContext(Context);

    const _content = content as any;

    return _content ? (
        <div className={classes.learning}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '.4rem'}}>
                <select className={classes.select} value={language} onChange={e => setLanguage(e.target.value as 'en' | 'pt')}>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                </select>
            </div>
            {Object.entries(_content).map(([key, value]: any, i) => (
                <React.Fragment key={key}>
                    <LearningCard text={value[language].text} audio={value[language].audio} index={i} />
                </React.Fragment>
            ))}
        </div>
    ) : null;
}

export default Learning;