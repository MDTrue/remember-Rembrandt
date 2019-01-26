import React from "react";
import "../../index.css";
const Nav = props => (
    <nav>
        <ul>
            <li class="nav__message">{props.message}</li>
            <li class="nav__score">Score:{props.score}</li>
            <li class="nav__topScore">Top Score:{props.topScore}</li>
        </ul>
    </nav>
)


export default Nav;