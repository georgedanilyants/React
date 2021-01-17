import React from "react";
import propTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: propTypes.string.isRequired,
    };

    render() {
        return <div>{ this.props.text } </div>
    }
}