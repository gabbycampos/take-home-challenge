import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        padding: '.5rem',
        textDecoration: 'none',
        color: 'orange'
    },
    a: {
        textDecoration: 'none',
        color: 'orange'
    }
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title}>
                        <NavLink className={classes.a} exact to="/">Yodlr Design Challenge</NavLink>
                    </Typography>
                    <Typography>
                        <NavLink className={classes.link} exact to="/register">Register</NavLink>
                        <NavLink className={classes.link} exact to="/admin">Admin</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;