import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function Header() {
    const {topicId} = useParams();

    return (
        <div className="header">
            <span style={{ fontSize: "20px"}}>Чат {topicId} </span>
        </div>
    )

}