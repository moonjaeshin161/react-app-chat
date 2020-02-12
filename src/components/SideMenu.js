import React from 'react';
import { Avatar, Drawer, ListItemText, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    avatar: {
        alignSelf: 'center'
    }
}))

function SideMenu() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Drawer variant="permanent" anchor='left'>
                <List>
                    <Avatar className={classes.avatar} />
                    <ListItem button key='Message'>
                        <ListItemText primary='Message'></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default SideMenu;