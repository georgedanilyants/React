import React, { useState, useMemo } from "react";
import { Redirect, useParams} from "react-router-dom"

export default function Header ({ chats }) {
    const { chatId } = useParams();
    const chat = useMemo(() => chats.find(t => t.id === chatId), [chatId, chats]);

    if (!chat) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="header">
            <span style={{ fontSize: "20px"}}>Чат {chat.id} </span>
        </div>
    )

}