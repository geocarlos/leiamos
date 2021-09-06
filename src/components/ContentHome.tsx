import { Button, makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import { Context } from "./ContextProvider";
import Learning from "./Learning";
import Training from "./Training";

const useStyles = makeStyles({
    contentHome: {
        width: '85%',
        height: '1.5rem',
        display: 'flex',
        padding: '1rem',
        justifyContent: 'flex-end'
    }
});

const ContentHome = () => {
    const classes = useStyles();
    const {setContent} = useContext(Context);
    const [activity, setActivity] = useState<string | null>(null);

    return (
        <>
            <div className={classes.contentHome}>
                <Button style={{marginRight: '1rem'}} onClick={() => setContent(null)} variant="contained" >Go Back</Button>
                <Button variant="contained" color="primary"
                    onClick={() => setActivity(prev => prev === 'learning' ? 'training' : 'learning')}>{activity === 'learning' ? 'Train' : 'Learn'}</Button>
            </div>
            {activity === 'learning' ? <Learning /> : <Training />}
        </>
    )
}

export default ContentHome;