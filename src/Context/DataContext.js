import React from "react";

//change here the value of sugar, milk and chocolate to disabled buttons
const DataContext = React.createContext({
    active: false,
    sugar: true,
    milk: true,
    chocolate: true,
    value: 0
});

export default DataContext;