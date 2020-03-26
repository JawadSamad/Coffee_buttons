import React, {Component} from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        //Added an state in which my default values are described below, here you can change the default values of
        // Suiker, Melk, Chocolade to false and it will disable Cappucino, Chocolade, Wiener Melage
        this.state = {
            buttons: [{active: false, suiker: true, melk:true, chocolade:true}]
        };
    }

    //Created an method which disables the button, with the setState value
    disableButton = () => {
        this.setState({
            buttons: [{active: false, chocolade: true, suiker: true, melk: true}]
        });
    };

    //Created an method which disables buttons for 7 seconds and reactivated the button through the setState method.
    setTimeHandler = () => {
        setTimeout(this.disableButton, 7000);
        this.setState({
            buttons: [{active: true}]
        });
    };

    handleClick = () =>  {
        this.props.clicked(this.props.name);
        this.setTimeHandler();
    };
    handleClickCapture = () => setTimeout(this.props.clickHandler(this.props.name), 7000);

    render() {
        return (
            <button
                onClickCapture={this.handleClickCapture}
                onClick={this.handleClick}
                disabled={this.state.buttons[0].active}>
                {this.props.name}
            </button>
        )
    }
}

export default Button;