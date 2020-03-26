import React, {Component} from "react";
import "./Slider.css";

class Slider extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    //Added an state in which my default values are described below, this.props.name references to the properties it got
    //from the components in App.js
    state = {
        value: 0 /*je kunt hier ook een default value hebben van 100*/, name: this.props.name
    };

    //Created an handleOnChange method which takes in an event and changes the state to where the mouse stops clicking
    handleOnChange = (e) => this.setState({value: e.target.value});

    render() {
        return (
            <div className="value">
                <h1 className="SuikerOfMelk">{this.props.name}</h1>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={this.state.value}
                    className="slider"
                    onChange={this.handleOnChange} />
                {this.state.value}
            </div>
        );
    }
}

export default Slider;