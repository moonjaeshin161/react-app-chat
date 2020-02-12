import React from 'react';
import { Avatar, Drawer, List, ListItem, Box, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    avatar: {
        marginTop: 10,
        marginLeft: 20
    },
    listIcon: {
        marginTop: 30,
        marginLeft: 5,
        paddingTop: 0
    }
}))

function SideMenu() {
    const classes = useStyles();
    return (

        <Box className={classes.root}>
            <Drawer variant="permanent" anchor='left'>
                <List>
                    <Avatar className={classes.avatar} />
                    <ListItem button key='Message'>
                        <ListItemIcon className={classes.listIcon}>
                            <MessageOutlinedIcon fontSize="large" />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default SideMenu;