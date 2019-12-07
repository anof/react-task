import React from 'react';
import './restaurantblock.css'

export default class RestaurantBlock extends React.Component {
    render() {
        return (
            <th className="restaurant-block">
                <div className="restaurant-name">
                    {this.props.name}
                </div>
                <div className="restaurant-cuisine">
                    {this.props.cuisine}
                </div>
                <div className="restaurant-rating">
                    {this.props.rating}
                </div>
            </th>
        )
    }
}