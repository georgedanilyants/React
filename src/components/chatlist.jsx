import React, { useCallback } from "react";
import { useRouteMatch, Link } from "react-router-dom";


export default function ChatList( {chatList} ) {

    const chatIds = Object.keys(chatList);

    const renderChatLink = useCallback((chatId) => {
        return (
            <Link to={`/chat/${chatId}`}> 
                <div>{chatList[chatId].name}</div>
            </Link>
        );
    }, []);

        return (
            chatIds.map(renderChatLink)
        )
    
}