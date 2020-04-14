import React from "react";
import "./Buttons.css";

const Button = ({ clicked, name, disabled, children }) => {

    const handleClick = () =>  {
        clicked(children);
    };

    return (
        <div>
            <button
                className={name}
                onClick={handleClick}
                disabled={disabled}>
                {children}
            </button>
        </div>
    )
};

export default Button;