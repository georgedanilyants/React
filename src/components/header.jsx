import React, { useState, useMemo } from "react";
import { Redirect, useParams} from "react-router-dom"

export default function Header ({ chatList }) {
    const { chatId } = useParams();
    const selected = useMemo(
            () => Object.keys(chatList).find((id) => id === chatId), 
            [chatId, chatList]
        );

    if (!selected) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="header">
            <span style={{ fontSize: "20px"}}>Чат {chatList[selected].name}</span>
        </div>
    );
}