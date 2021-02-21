import React from "react";
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import ChatList from "./chatlist.jsx";
import Header from "./header.jsx";
import Input from "./input";
import Layout from "./layout";
import Message from "./message"


export default function Routes() {

    const [messages, setMessages] = useState([
        {text: "message1", author: "me"},
        {text: "message2", author: "me"},
    ]);

    const renderMessage = useCallback((message, i) => {
        return <Message message={message} key={i} />;
    }, []);

    const handleAddMessage = useCallback((text, author = 'me') => {
        setMessages((oldMessages) => ([...oldMessages, { text, author }]));
    }, []);

    useEffect(() => {
        let timeout;
        if (messages[messages.length - 1].author !== 'robot') {
            const timeout = setTimeout(() => {
                handleAddMessage('some answer', 'robot')
            }, 1500)
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [messages, handleAddMessage]);


        return (
            <>
                <Router>
                    <Container>
                        <Switch>
                            <Route path='/'> <Layout/> </Route>
                            <Route> <div>No such page found</div> </Route>
                        </Switch>
                    </Container>
                </Router>
            </>);
}