import React from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    items: {
      margin: '1rem',
    },
  })
  
function User({ id, firstName, lastName, email, handleDelete, handleUpdate }) {
    const classes = useStyles()

    const remove = () => handleDelete(id);
    const update = () => handleUpdate(id);

    return (
        <div>
            <Card className={classes.items}>
                <CardHeader
                    action={
                        <IconButton onClick={remove}>
                            🗑
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
            </Card>
        </div>
    )
}

export default User;