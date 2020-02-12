import React, { useState } from 'react';
import { Paper, makeStyles, Box, Typography, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: blue[200],
        height: '430px',
        marginRight: 2,
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    textField: {
        width: '400px',
    },
    message: {
        marginRight: 5,
    }
}));



function ConversationList() {
    const classes = useStyles();
    // eslint-disable-next-line
    const [messages, setMessages] = useState([
        { user_sender: 'MT', content: 'Hey', user_receiver: 'AD' },
        { user_sender: 'MT', content: 'Hey2', user_receiver: 'AD' },
    ]);
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input !== '') {
            setMessages([
                ...messages,
                { user_sender: 'MT', content: input, user_receiver: 'AD' }
            ])
        }
        setInput('');

    }

    return (
        <>
            <Paper className={classes.root} variant='outlined' elevation={0}  >
                <Box display='flex' flexDirection='column' justifyContent='flex-end'>
                    {
                        messages.map((message, index) => {
                            return (
                                <React.Fragment key={index} >
                                    <Typography className={classes.message} variant="body1">{message.user_sender}:{message.content}</Typography>
                                </React.Fragment>
                            )
                        })
                    }

                </Box>
            </Paper>
            <Box >
                <form action="/" method="POST" onSubmit={handleSubmit} display='flex' flexDirection='row'>
                    <TextField label="Chat something...." size="small" value={input} onChange={(e) => setInput(e.target.value)} fullWidth />
                    <Box component='span' justifyContent='flex-end'>
                        <Button>
                            <SendIcon type='submit' />
                        </Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default ConversationList;