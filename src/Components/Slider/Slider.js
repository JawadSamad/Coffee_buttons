import React, {useState, useContext} from "react";
import "./Slider.css";
import DataContext from "../../Context/DataContext";

const Slider = ({ name, disabled }) => {

    const dataContext = useContext(DataContext);
    // eslint-disable-next-line no-unused-vars
    let value = dataContext.value;

    let [currentValue, setValue] = useState(value = dataContext.value);

    const setValueBack = () => {
        setValue(value = 0)
    };

    //Created an handleOnChange method which takes in an event and changes the state to where the mouse stops clicking
    const handleOnChange = (e) => {
        setValue(value = e.target.value);
        setTimeout(setValueBack, 10000);
    };

        return (
            <div className="container">
                <h1 className="SuikerOfMelk">{name}</h1>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={currentValue}
                    className="slider"
                    disabled={disabled}
                    onChange={handleOnChange}/>
                {currentValue}
            </div>
        );
};

export default Slider;