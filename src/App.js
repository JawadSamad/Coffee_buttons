import React, {useState} from 'react';
import './App.css';
import Button from "./Components/Button";
import Statusbar from "./Components/Statusbas";

const App = () => {
    //Setting useState values of my statusbar Component + Button
    let [getDrinks, setValueDrinks] = useState("Maak een keuze");
    const prepared = (nameValue) => {setValueDrinks(nameValue + " wordt voorbereid, even geduld aub...")};
    const donePreparing = (nameValueHandler) => () => {setValueDrinks(nameValueHandler + " is klaar!")};

    return(
        <div>
            <Button clicked={prepared} clickHandler={donePreparing} name={"Americano"}/>
            <Button clicked={prepared} clickHandler={donePreparing} name={"Cappucino"}/>
            <Button clicked={prepared} clickHandler={donePreparing} name={"Wiener Melage"}/>
            <Button clicked={prepared} clickHandler={donePreparing} name={"Chocolade"}/>
            <Button clicked={prepared} clickHandler={donePreparing} name={"Zwarte Thee"}/>
            <Button clicked={prepared} clickHandler={donePreparing} name={"Earl Gray"}/>
            <Statusbar name={getDrinks}/>
        </div>
    )
};

export default App;