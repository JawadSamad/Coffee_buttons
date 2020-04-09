import React, {useState, useContext} from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Statusbar from "./Components/Statusbar/Statusbar";
import Slider from "./Components/Slider/Slider";
import DataContext from "./Context/DataContext";

const App = () => {

    const dataContext = useContext(DataContext);

    //Setting useState values of my Statusbar + Button component
    let [getDrinks, setValueDrinks] = useState("Maak uw keuze");
    const prepared = (nameValue) => {
        setTimeHandler();
        setValueDrinks(nameValue + " wordt voorbereid, even geduld aub...");
        setTimeout(() => setValueDrinks(nameValue + " is klaar!"), 6000);
        setTimeout(() => setValueDrinks("Maak uw keuze"), 8000);
    };

    // eslint-disable-next-line no-unused-vars
    let active;
    let [attributes, setAttributes] = useState(active = dataContext.active);

    //Created an method which disables buttons for 7 seconds and reactivated the button through the setState method.
    const setTimeHandler = () => {
        setTimeout(() => {setAttributes(active = false)}, 7000);
        setAttributes(active = true)
    };

    return(
        <div>
            <div>
                <Button disabled={attributes} clicked={prepared} name={"Americano"}/>
                {dataContext.sugar && dataContext.milk ?
                <Button disabled={attributes} clicked={prepared} name={"Cappucino"}/>
                : <Button clicked={() => {}} disabled={true} name={"Cappucino"}/>}
                {dataContext.chocolate ?
                    <div>
                        <Button disabled={attributes} clicked={prepared} name={"Wiener-Melage"}/>
                        <Button disabled={attributes} clicked={prepared} name={"Chocolade"}/>
                    </div> :
                    <div>
                        <Button clicked={() => {}} disabled={true} name={"Wiener-Melage"}/>
                        <Button clicked={() => {}} disabled={true} name={"Chocolade"}/>
                    </div>}
                <Button disabled={attributes} clicked={prepared} name={"Zwarte-Thee"}/>
                <Button disabled={attributes} clicked={prepared} name={"Earl-Gray"}/>
            </div>
            <Statusbar name={getDrinks}/>
            { dataContext.sugar ? <Slider name={"Suiker"}/> : <Slider disabled={true} name={"Suiker is helaas op! Vul het aub aan."}/>}
            { dataContext.milk ? <Slider name={"Melk"}/> : <Slider disabled={true} name={"Melk is helaas op! Vul het aub aan."}/>}
        </div>
    )
};

export default App;