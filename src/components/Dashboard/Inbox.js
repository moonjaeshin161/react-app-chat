import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText, ListItemAvatar, Typography, ListItem, Avatar, Box } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    usersList: {
        overflow: 'scroll',
        height: 600
    }
}));


function Inbox() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line
    const [activeUser, setActiveUser] = useContext(UserContext);

    const getUsersList = async () => {
        const response = await fetch('https://h-chat-backend.herokuapp.com/api/user/get-users');
        const json = await response.json();
        setUsers(json.data);
    }

    useEffect(() => {
        getUsersList();
    }, [])

    return (
        <Box>
            <Box className={classes.usersList}>
                <List >
                    {

                        users.map((user, index) => {
                            return (
                                <ListItem alignItems="flex-start" key={index} onClick={() => setActiveUser(user)}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {user.email}
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            );
                        })
                    }

                </List>
            </Box>
        </Box>
    )
}

export default Inbox;