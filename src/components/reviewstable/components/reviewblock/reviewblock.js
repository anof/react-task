import React from 'react';
import './reviewblock.css'

export default class Reviewblock extends React.Component {
    insertCheckMark(checked)
    {
        if(checked)
            return(<span className="check-mark">&#10003;</span>)
    }
    render() {
        return (
            <td className={(this.props.checked)?'review-block-checked':"review-block"}>
                {this.insertCheckMark(this.props.checked)}
            </td>
        )
    }
}