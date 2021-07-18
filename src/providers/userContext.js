import React, { createContext, useContext, useState } from 'react';

export const UserIssuesContext = createContext({});

export const UserIssuesProvider = (props) => {
    const [user, setUser] = useState("");

    return (
        <UserIssuesContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserIssuesContext.Provider>
    );
};

export const useUserIssues = () => useContext(UserIssuesContext);
