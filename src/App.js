import React, {useState} from 'react';
import './App.css';
import Button from "./Components/Button";
import Statusbar from "./Components/Statusbar";
import Slider from "./Components/Slider";

const App = () => {
    //Setting useState values of my Statusbar + Button component
    let [getDrinks, setValueDrinks] = useState("Maak een keuze");
    const prepared = (nameValue) => {setValueDrinks(nameValue + " wordt voorbereid, even geduld aub...")};
    const donePreparing = (nameValueHandler) => () => {setValueDrinks(nameValueHandler + " is klaar!")};

    return(
        <div>
            <div>
                <Button clicked={prepared} clickHandler={donePreparing} name={"Americano"}/>
                <Button clicked={prepared} clickHandler={donePreparing} name={"Cappucino"}/>
                <Button clicked={prepared} clickHandler={donePreparing} name={"Wiener Melage"}/>
                <Button clicked={prepared} clickHandler={donePreparing} name={"Chocolade"}/>
                <Button clicked={prepared} clickHandler={donePreparing} name={"Zwarte Thee"}/>
                <Button clicked={prepared} clickHandler={donePreparing} name={"Earl Gray"}/>
            </div>
            <Statusbar name={getDrinks}/>
            <Slider value={"Suiker"}/>
            <Slider value={"Melk"}/>
        </div>
    )
};

export default App;