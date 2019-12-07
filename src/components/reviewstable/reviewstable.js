import React from 'react';
import './reviewstable.css'
import InputText from '../input/inputtext'
import RestaurantBlock from './components/restaurantblock/restaurantblock'
import PersonReviewRow from './components/personreview/personreview'
import { connect } from "react-redux";

class ReviewsTable extends React.Component {
    render() {
        return (
            <div>
                {console.log(this.props.venues)}
                <table className="reviews-table">
                    <thead>
                        <tr key="1">
                            <RestaurantBlock cuisine="Participants" />
                            <RestaurantBlock name="Restaurant 1" cuisine="cuisine 1" rating="10" />
                            <RestaurantBlock name="Restaurant 2" cuisine="cuisine 2" rating="10" />
                            <RestaurantBlock name="Restaurant 3" cuisine="cuisine 3" rating="10" />
                        </tr>
                    </thead>
                    <tbody>
                        <PersonReviewRow name="Person 1" number={3} check={1} />
                        <PersonReviewRow name="Person 2" number={3} check={2} />
                        <PersonReviewRow name="Person 3" number={3} check={3} />
                        <PersonReviewRow name="Person 3" number={3} check={2} />
                        <tr key="2">
                            <td><InputText placeholder="Type here" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    venues: state.venues
})

export default connect(mapStateToProps)(ReviewsTable)