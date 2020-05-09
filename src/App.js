import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import React from 'react';

import History from "./history/history";
import Players from "./players/players";
import Matches from "./matches/matches";
import Player from "./player/player";
import Home from "./home/home";
import './App.css';

const  App = () => {
  return (
    <div className="App">
        <nav>
            <label className='logo'>FC Barcelona</label>
            <ul>
                <li><NavLink to={"/"} exact >Home</NavLink></li>
                <li><NavLink to={"/history"}>History</NavLink></li>
                <li><NavLink to={"/players"}>Players</NavLink></li>
                <li><NavLink to={"/matches"}>Matches</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/history"} component={History}/>
            <Route path={"/players"} exact component={Players}/>
            <Route path={"/players/:name"} exact  component={Player}/>
            <Route path={"/matches"} component={Matches}/>
            <Redirect to={"/"}/>
        </Switch>
    </div>
  )
}

export default App;
