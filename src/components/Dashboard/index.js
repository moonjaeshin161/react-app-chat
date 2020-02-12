import React, { useContext, useState } from 'react';
import { Grid, Typography, makeStyles, Box, Button, Drawer, Paper } from '@material-ui/core';
import Inbox from './Inbox';
import { UserContext } from '../../context/UserContext';
import ConversationList from './ConversationList';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles(() => ({
    title: {
        textAlign: "center"
    },
    grid: {
        backgroundColor: 'blue'
    },
    menuRight: {
        textAlign: 'right'
    }
}));

function Dashboard() {
    const classes = useStyle();
    // eslint-disable-next-line
    const [activeUser, setActiveUser] = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpen(open);
    };



    return (
        <>
            <Grid item xs={3} >
                <Box borderRight={1} >
                    <Typography variant='h4' className={classes.title}>Inbox</Typography>
                    <Inbox />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='h4' className={classes.title} display='inline'>{activeUser.email}</Typography>
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon className={classes.menuRight} />
                </Button>
                <ConversationList />
            </Grid>
            <Drawer open={isOpen} anchor='right' onClose={toggleDrawer(false)}>
                <Paper>
                    <h1>Hello</h1>
                </Paper>
            </Drawer>
        </>
    )
}

export default Dashboard;