import React from "react";
import "./Error.css"

const Error = ({ error }) => {

    return (
        <div className={"ErrorFrame"}>
            <label className={"Label"}>
                <h1>Helaas is er een technische storing:
                    <br/> {error}
                    <br/>Het maken van dranken is helaas niet mogelijk.</h1>
            </label>
        </div>
    )

};

export default Error;