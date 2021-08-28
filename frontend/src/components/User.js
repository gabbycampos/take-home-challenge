import React, { useState } from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { Icon, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    items: {
        margin: '1rem',
    },
})

function User({ id, firstName, lastName, email, remove, update }) {
    const classes = useStyles();
    const [editformData, setEditFormData] = useState({
        firstName: '',
        lastName: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };
    const handleChange = evt => {
        setEditFormData(evt.target.value);
    };

    const handleRemove = () => remove(id);

    const handleUpdate = evt => {
        evt.preventDefault();
        debugger;
        update(id, editformData);
        setIsEditing(false);
    };
    // default todo view
    let jsx = (
        <div>
        <Card className={classes.items}>
            <CardHeader
                action={
                    <IconButton onClick={toggleEdit}>
                        ✏️
                    </IconButton>
                }
                title={firstName}
                subheader={lastName}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {email}
                </Typography>
            </CardContent>
            <CardHeader
                action={
                    <IconButton onClick={handleRemove}>
                        🗑
                    </IconButton>
                }
            />
        </Card>
    </div>
    );

    if (isEditing) {
        
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input 
                        placeholder="first name"
                        type="text"
                        label="first name"
                        name="firstName"
                        value={editformData.firstName} onChange={handleChange}
                        id="firstName" 
                    />
                    <input 
                        placeholder="last name"
                        type="text"
                        label="last name"
                        name="lastName"
                        value={editformData.lastName} onChange={handleChange}
                        id="lastName" 
                    />
                    <button>Update!</button>
                </form>
            </div>
        )
    }
    return jsx;
}

export default User;