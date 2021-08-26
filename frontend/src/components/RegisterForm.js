import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { url } from '../api/api';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

//const url = 'http://localhost:3000/users';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
})

function RegisterForm() {
    const classes = useStyles();
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        axios.post(url, formData).then((response) => {
            history.push('/admin');
        }).catch(error => console.log(error));
    }
    return (
        <Container>
            <form onSubmit={handleSubmit} className={classes.formStyle}>
                <TextField className={classes.field}
                    onChange={handleChange}
                    label="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    id="email"
                />
                <TextField className={classes.field}
                    onChange={handleChange}
                    label="first name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    id="firstName"
                />
                <TextField className={classes.field}
                    onChange={handleChange}
                    label="last name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    id="lastName"
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained">
                    Register
                </Button>
            </form>
        </Container>
    )
}

export default RegisterForm;