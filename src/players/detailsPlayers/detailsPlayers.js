import {withRouter} from "react-router-dom"
import React from "react";

import './detailsPlayers.css';

const DetailsPlayers = props => {
    return (
        <div className='card'>
            <h2 className='card-title'>{props.name}</h2>
            <br/><br/>
            <p className='card-text'> {props.about}</p>
            <br/><br/>
            <button className='btn-btn' onClick={() => props.history.push('/players/' + props.name.toLowerCase())}>More Information</button>
        </div>
    )
}

export default withRouter(DetailsPlayers)
