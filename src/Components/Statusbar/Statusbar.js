import React from "react";
import "./Statusbar.css";

const Statusbar = ({ name }) => {
    return (
        <div className="container1">
            <p>{name}</p>
        </div>
    )
};

export default Statusbar;