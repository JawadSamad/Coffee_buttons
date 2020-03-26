import React, {Component} from "react";

class Button extends Component {

    handleClick = () => this.props.clicked(this.props.name);
    handleClickCapture = () => setTimeout(this.props.clickHandler(this.props.name), 4000);

    render() {
        return (
            <button
                onClickCapture={this.handleClickCapture}
                onClick={this.handleClick}>
                {this.props.name}
            </button>
        )
    }
}

export default Button;