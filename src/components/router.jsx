import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Layout from "./layout";

export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/'> <Layout/> </Route>
                    <Route exact path='/chat/1/'> <Layout/> </Route>
                    <Route exact path='/chat/2/'> <Layout/> </Route>
                    <Route exact path='/chat/3/'> <Layout/> </Route>
                </Switch>
            </Router>
        </>);
}