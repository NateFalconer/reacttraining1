import React, { Component } from 'react';

class Random extends Component {
    min = this.props.min;
    max = this.props.max;
    render() {
        return (
            <div> 
            Random value between {this.min} and {this.max} =>
            {Math.floor(Math.random() * this.max) + this.min}
            </div>
        );
    }
}

export default Random;