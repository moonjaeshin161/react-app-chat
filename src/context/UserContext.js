import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [activeChat, setActiveChat] = useState({ email: 'Conversation List', age: 20 })
    return (
        <UserContext.Provider value={[activeChat, setActiveChat]}>
            {props.children}
        </UserContext.Provider>
    )
};