import React, { Component } from 'react';

// Create a click listener which, when activated, updates the state to the following hex value: '#333'

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value 
            // don't forget props is a key and a value, in this case val from Matrix. set it to props.value
        }
    }

    onClickEvent = () => {
        // arrow functions better
        this.setState({
            color: "#333"
            // IT'S A HEX VALUE DON'T FORGET THE HEX VALUE
        })
    }

    render() {
        return (
        // don't forget your return inside your render
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.onClickEvent}></div>
        )
    }
}
