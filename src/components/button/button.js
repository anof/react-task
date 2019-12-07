import React from 'react';
import './button.css'

export default class Button extends React.Component{
    render(){
        return(
            <button className="main-button">
                {this.props.content}
            </button>
        )
    }
}