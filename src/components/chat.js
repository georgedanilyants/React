import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";

export default function Chat({chatList}) {
    const { chatId } = useParams();
    const chat = useMemo(() => chatList.find(t => t.id === chatId), [chatId, chatList]);

    if (!chat) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <>
        <h3>Chat {chat.id}</h3>
        </>
    );
}