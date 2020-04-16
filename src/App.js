import React, {useState, useContext} from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Statusbar from "./Components/Statusbar/Statusbar";
import Slider from "./Components/Slider/Slider";
import DataContext from "./Context/DataContext";
import Error from "./Components/Error/Error";
import ErrorMessage from "./Context/ErrorMessage";
import backgroundImage from "./Image/rect3717.png"

const App = () => {

    const dataContext = useContext(DataContext);
    const errorMessage = useContext(ErrorMessage);

    //Setting useState values of my Statusbar + Button component
    let [getDrinks, setValueDrinks] = useState("Maak uw keuze");

    // eslint-disable-next-line no-unused-vars
    let active;
    let [attributes, setAttributes] = useState(active = dataContext.active);

    const prepared = (nameValue) => {
        setTimeout(() => {setAttributes(active = false)}, 7000);
        setAttributes(active = true);
        setValueDrinks(nameValue + " wordt voorbereid, even geduld aub...");
        setTimeout(() => setValueDrinks(nameValue + " is klaar!"), 6000);
        setTimeout(() => setValueDrinks("Maak uw keuze"), 8000);
    };

    return(
        <div>
            <img src={backgroundImage} alt="CoffeeMock.js"/>
            <div>
                <Button disabled={attributes} clicked={prepared} name={"Americano"}>Americano</Button>
                {dataContext.sugar && dataContext.milk ?
                <Button disabled={attributes} clicked={prepared} name={"Cappucino"}>Cappucino</Button>
                    : <Button clicked={() => {}} disabled={true} name={"Cappucino"}>Cappucino</Button>}
                {dataContext.chocolate ?
                    <div>
                        <Button disabled={attributes} clicked={prepared} name={"Wiener-Melage"}>Wiener Melage</Button>
                        <Button disabled={attributes} clicked={prepared} name={"Chocolade"}>Chocomel</Button>
                    </div> :
                    <div>
                        <Button clicked={() => {}} disabled={true} name={"Wiener-Melage"}>Wiener Melage</Button>
                        <Button clicked={() => {}} disabled={true} name={"Chocolade"}>Chocolade</Button>
                    </div>}
                <Button disabled={attributes} clicked={prepared} name={"Zwarte-Thee"}>Zwarte Thee</Button>
                <Button disabled={attributes} clicked={prepared} name={"Earl-Gray"}>Earl Gray</Button>
                <Statusbar name={getDrinks}/>
                { dataContext.sugar ? <Slider name={"Suiker"} disabled={attributes}/> : <Slider disabled={true} name={"Suiker is helaas op! Vul het aub aan."}/>}
                { dataContext.milk ? <Slider name={"Melk"} disabled={attributes}/> : <Slider disabled={true} name={"Melk is helaas op! Vul het aub aan."}/>}
                {/*!!! Pass down below the error message(code1 - code2 or code3) which you want to display !!!*/}
                {/*<Error error={errorMessage.code3}/>*/}
            </div>
        </div>
    )
};

export default App;