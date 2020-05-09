import React, {useEffect, useState} from "react";
import axios from 'axios'

import './matches.css';

const Matches = () =>  {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/matches')
            .then(res => {
                setMatches( res.data);
            })
    },[])
    return(
        <div className="wrapper">
            {matches.map((match,id) => {
                console.log(match)
                return (
                    <div>
                        <table style={{width:"60%"}}>
                            <tr>
                                <th>Match With</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            <tr>
                                <td>{match.matchBeetwen}</td>
                                <td>{match.day}</td>
                                <td>{match.time}</td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default Matches
