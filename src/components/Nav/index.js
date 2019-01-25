import React from "react";
import "./style.css";
const Nav = props => (
    <nav>
        <ul>
            <li class="navList">
            <a href="../../../public/index.html">{props.title}</a>
            </li>
            <li class="nav__message">{props.message}</li>
            <li class="nav__score">Score:{props.score}</li>
            <li class="nav__topScore">Top Score:{props.topScore}</li>
        </ul>
    </nav>
)


export default Nav;