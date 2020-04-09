import React from "react";
import './Buttons.css';

const Button = ({ clicked, name, disabled }) => {

    //const dataContext = useContext(DataContext);
    //let active = dataContext.active;

    // let [attributes, setAttributes] = useState(active = disabled);
    //
    // //Created an method which disables the button, with the setState value
    // const disableButton = () => {
    //     setAttributes(active = false)
    // };
    //
    // //Created an method which disables buttons for 7 seconds and reactivated the button through the setState method.
    // const setTimeHandler = () => {
    //     setTimeout(disableButton, 7000);
    //     setAttributes(active = true)};

    const handleClick = () =>  {
        clicked(name);
    };

    return (
        <div>
            <button
                className={name}
                onClick={handleClick}
                disabled={disabled}>
                {name}
            </button>
        </div>
    )
};

export default Button;