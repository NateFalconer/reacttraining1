import React, { Component } from 'react';
import "./Greetings.css"

class Greetings extends Component {
    greet = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
      };
    
    render() {
        return (
            <div>
                <p>{this.greet[this.props.lang]} {this.props.children}</p>
            </div>
        );
    }
}

export default Greetings;