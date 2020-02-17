import React, { Component } from 'react';
import "./IdCard.css"
class IdCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.picture} alt={this.props.pic} />
                <div>First Name: {this.props.firstName}</div>
                <div>Last Name: {this.props.lastName}</div>
                <div>Gender: {this.props.gender}</div>
                <div>Height: {this.props.height}</div>
                <div>Birth: {this.props.birth.toDateString()}</div>
            </div>
        );
    }
}

export default IdCard;