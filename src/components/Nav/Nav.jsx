import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from 'react-router-dom';


export default function Nav(props) {
    return (
            <div className={styles.container}>
                <Link to={'/home'}><img src= {require('../../assets/Rick-and-Morty-logo-600x257.png')} class='logo' alt='main logo' /></Link>
                <ul>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/favorites'}>Favorite</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><SearchBar onSearch={props.onSearch} logOut={props.logOut} /></li>
                </ul>
            </div>

    )
}
