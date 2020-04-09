import React from "react";

const DataContext = React.createContext({
    active: false,
    sugar: true,
    milk: true,
    chocolate: false,
    value: 0
});

export default DataContext;