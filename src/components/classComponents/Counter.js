import React, { Component } from "react";
import "../../styles/button.css";

//This is reusable component
class Counter extends Component {

    state = { count: 0 };

    handleIncrement = (product) => {
        console.log(`recived product to increment : ` , JSON.stringify(product));
        this.setState({count: this.state.count+product.count})
    }

    render() {
        return <React.Fragment>
            <h1>Number of likes = {this.state.count}</h1>
            <button onClick={() => this.handleIncrement({
                id:'p001',
                count: 1
            })}>Likes</button>
        </React.Fragment>;
    }
};

export default Counter;