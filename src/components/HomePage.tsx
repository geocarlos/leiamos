import { Button, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import ContentHome from "./ContentHome";
import { Context } from "./ContextProvider";

const useStyles = makeStyles({
    homePage: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        justifyContent: 'center'
    },
    btnContainer: {
        padding: '1rem'
    },
    title: {
        color: 'purple',
        textShadow: '3px 5px #888',
        fontWeight: 700,
        textAlign: 'center',
        width: '100%'
    }
});

const HomePage = () => {
    const classes = useStyles();

    const {content, setContent} = useContext(Context);

    return (
        <div className={classes.homePage}>
            <Typography variant="h1" className={classes.title}>Leiamos</Typography>
            {content ?
                <ContentHome /> :
                <>
                    <div className={classes.btnContainer}>
                        <Button onClick={() => setContent('numbers')} variant="contained" color="primary">Learn Numbers</Button>
                    </div>
                    <div className={classes.btnContainer}>
                        <Button onClick={() => setContent('alphabet')}  variant="contained" color="primary">Learn the Alphabet</Button>
                    </div>
                </>}
        </div>
    )
}

export default HomePage;