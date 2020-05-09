import React, {useState} from "react";

import DetailsPlayers from "./detailsPlayers/detailsPlayers";
import './players.css';

const Players = () => {
    const [palyers, setPlayers] = useState([
        {name: 'Ter Stegen', number: 1, about: 'He is a goalkepper', nationality:'Germany player'},
        {name: 'Gerard Piqué', number: 3, about: 'He is a defender',nationality:'Spanish player'},
        {name: 'Clement Langlet', number: 15, about: 'He is a defender',nationality:'France player'},
        {name: 'Nelson Semedo', number: 2, about: 'He is a defender',nationality:'Portugal player'},
        {name: 'Jordi Alba', number: 18, about: 'He is a  defender',nationality:'Spanish player'},
        {name: 'Sergio Busquets', number: 5, about: 'He is a  midfielder',nationality:'Spanish player'},
        {name: 'Frankie de Jong', number: 21, about: 'He is a  midfielder',nationality:'Holand player'},
        {name: 'Ivan Rakitic', number: 4, about: 'He is a  midfielder',nationality:'Croat player'},
        {name: 'Lionel Messi', number: 10, about: 'He is a  forward',nationality:'Argentin player'},
        {name: 'Luis Suarez', number: 9, about: 'He is a  forward',nationality:'Uruguay player'},
        {name: 'Antonie Griezmann', number: 17, about: 'He is a  forward',nationality:'France player'},
    ]);
    return(
        <div className='wrapper'>
            {palyers.map((player, index) => {
                return (
                    <DetailsPlayers
                        key={index}
                        name={player.name}
                        number={player.number}
                        about={player.about}
                        nationality={player.nationality}
                    />
                )
            })}
        </div>
    )
}
export default Players
