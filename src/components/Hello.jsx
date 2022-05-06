import React, { Component } from 'react'
import './rs-styles.css'
class Hello extends Component {
    constructor() {
        super();
    }  
    render() {
        return (
            
                <div>
                <Button onClock={this.getModal} >Get The Model</Button>
                
                <Button><Heart /> React</Button>
                {this.getModal}
                </div>                
        );
    }
}

function Button(props) {
    return (
        <button className="btn">{props.children}</button>
    );
}




class Heart extends Component {
    state = {}
    render() {
        return (
            <span>&hearts;</span>
        );
    }
}



function Widget(props) {
    return <div>
        <h1>1 is {props.m1}</h1>
        <h1>2 is {props.m2}</h1>
    </div>
}
export default Hello;