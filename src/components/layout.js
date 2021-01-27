import React, {useEffect, useState, useCallback} from "react";
import Message from "./message";
import Input from "./input";
import ChatList from "./chatlist.jsx";
import Header from "./header.jsx";
import "../styles/styles.css"

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
    
    return (
        <>
            <div className="layout">
                <Header chatId= {1}/>
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <ChatList/>
                    </div>
                    <div className="layout-right-side">
                        <div className="message-field">
                            {messages.map(renderMessage)}
                        </div>
                        <Input onAddMessage={handleAddMessage} />
                     </div>
                </div>
            </div>
        </>
    );
}