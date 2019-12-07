import React from 'react';
import './inputtext.css'

export default class InputText extends React.Component{
    render(){
        return(
            <input type="text" className="main-input-text"
            placeholder={this.props.placeholder}
            />
        )
    }
}