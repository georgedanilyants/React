import React, {useEffect, useState, useCallback} from "react";
import Message from "./message";
import Input from "./input";
import ChatList from "./chatlist.jsx";
import Header from "./header.jsx";
import "../styles/styles.css"
import { Route, useRouteMatch } from "react-router-dom";

const initialChats = {
    id1: {
        id: "id1",
        name: "Chat1",
    },
    id2: {
        id: "id2",
        name: "Chat2",
    }
}

export default function Layout () {
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
    
    const [chatList, setChatList] = setState(initialChats);

    const match = useRouteMatch();

    return (
        <>
            <div className="layout-canvas">
                <div className="layout-left-side">
                    <ChatList chatList={chatList} url={match.url} />
                </div>
                    <Input onAddMessage={handleAddMessage} />
            </div>
            <Switch>
                <Route path={`/chat/:chatId`}>
                    <div className="layout">
                        <Header chatList={chatList}/>
                        
                    </div>
                </Route>
                <Route>

                </Route>
            </Switch>
        </>
    );
}