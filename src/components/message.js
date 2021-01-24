import React from "react";


export default function Message ({ message }) {
    return (
        <div 
            className="message"
            style={ { alignSelf: message.author === "robot" ? "flex-start" : "flex-end"} }
        >
            <div>{message.text}</div>
            <div className="message-sender">{message.author}</div>
        </div>
    )
}