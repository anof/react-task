import React from 'react';
import './personreview.css'
import ReviewBlock from '../reviewblock/reviewblock'

export default class PersionReview extends React.Component {

    renderReviewBlocks(number, check)
    {
        let values = []
        for(let i = 1; i <= number; i++)
        {
            values.push(<ReviewBlock checked={(i===check?true:false)} />)
        }

        return values;
    }
    render() {
        return (
            <tr key={this.props.name}>
                <td>{this.props.name}</td>
                {this.renderReviewBlocks(this.props.number, this.props.check)}
            </tr>
        )
    }
}