import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Inbox from './Inbox';
import { UserContext } from '../context/UserContext';

function Dashboard() {
    const [activeUser, setActiveUser] = useContext(UserContext);
    return (
        <>
            <Grid item xs={3}>
                <Typography variant='h4'>Inbox</Typography>
                <Inbox />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4'>{activeUser.email}</Typography>
            </Grid>
        </>
    )
}

export default Dashboard;