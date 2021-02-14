import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./layout";
import Header from "./header";

export default function Routes() {
    return (
        <>
            <Router>
                <div className="layout">
                    <Header/>
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
                <Switch>
                    <Route path='/'> <Layout/> </Route>
                    <Route exact path='/chat/1/'> <Layout/> </Route>
                    <Route exact path='/chat/2/'> <Layout/> </Route>
                    <Route exact path='/chat/3/'> <Layout/> </Route>
                    <Route> <div>No such page found</div> </Route>
                </Switch>
            </Router>
        </>);
}