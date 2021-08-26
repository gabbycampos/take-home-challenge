import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80')`,
        backgroundPosition: 'center',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))
function Home() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
            </Box>
        </div>
    )
}

export default Home;