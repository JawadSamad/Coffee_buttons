import React from "react";

const DataContext = React.createContext({
    active: false,
    sugar: true,
    milk: true,
    chocolate: true,
    value: 0
});

export default DataContext;