import React, { useCallback } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import ContentSend from "material-ui/svg-icons/content/send";
import Chat from "./chat";


export default function ChatList() {

    const match = useRouteMatch();

    const renderChat = useCallback((t) => {
        return (
            <div key={t.id}>
                <Link to={`${match.url}/${t.id}`}> {t.text} </Link>
            </div>
        );
    }, [match]);

        return (
            <List>
                <Link to="/chat/1/">
                    <ListItem primaryText="Chat 1" leftIcon={<ContentSend/>} />
                </Link>
                <Link to="/chat/2/">
                    <ListItem primaryText="Chat 2" leftIcon={<ContentSend/>} />
                </Link>
                <Link to="/chat/3/">
                    <ListItem primaryText="Chat 3" leftIcon={<ContentSend/>} />
                </Link>
            </List>
        )
    
}

