import React from "react";

const ErrorMessage = React.createContext({
    code1: "`Geen water, vul bij aub`",
    code2: "`Interne status fout`",
    code3: "`Temperatuur te laag`"
});

export default ErrorMessage;