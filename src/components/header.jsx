import React, { useState, useMemo } from "react";
import { Redirect, useParams} from "react-router-dom"

export default function Header({chatList}) {
    const { chatId } = useParams();
    const chat = useMemo(() => chatList.find(t => t.id === chatId), [chatId, chatList]);

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