import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import { url } from '../api/api';
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    items: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  })
  
function Users() {
    const classes = useStyles()
    const [users, setUsers] = useState([]);

    // get all users
    useEffect(() => {
        fetchUsers();
    }, [])
    const fetchUsers = () => {
        // debugger
        axios.get(url).then((response) => {
            setUsers(response.data)
        }).catch(error => console.log(error));
    }

    // update a user
    const update = (id, updatedUser) => {
        debugger;
        axios.put(`${url}/${id}`, updatedUser).then((response) => {
            debugger;
            setUsers(users => users.map(user => user.id === id ? response.data: updatedUser));
        }).catch(error => console.log(error));
    }

    // delete a user
    const remove = id => {
        axios.delete(`${url}/${id}`).then((response) => {
            setUsers(users.filter(user => user.id !== id));
        })
    }

    // user components
    const userComponents = users.map(user => (
        <User 
            remove={remove}
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            update={update}
        />
    ))
    return (
        <div className={classes.root}>
            <List>
                <ListItem className={classes.items}>
                { userComponents}
                </ListItem>
            </List>
        </div>
    )
}

export default Users;