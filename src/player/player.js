import React from "react";

import './player.css'

const Player = props => {
    console.log(props);
    return (
        <div className='container' style={{textAlign:'center'}}>
            <h1>{props.match.params.name.toUpperCase()}</h1>
            {/*<h1>{props.match.params.about.toUpperCase()}</h1>*/}
        </div>
    )
}
export default Player
