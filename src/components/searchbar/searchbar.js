import React from 'react';
import './searchbar.css'
import Button from '../button/button'
import InputText from '../input/inputtext'

export default class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-bar">
                <InputText placeholder="10999 Berlin"/>
                <Button content="Search"/>
            </div>
        )
    }
}