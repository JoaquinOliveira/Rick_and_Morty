import React from "react";
import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const [userInput, setUserImput] = useState('');
   //cuando ocurra un cambio en el value del input
   //tomar ese value y guardarlo en el estado del userINput

   function handleChange(e) {
      setUserImput([e.target.value])
   }

   return (
      <div className={styles.container}>
            <input placeholder='Character...' type='text' value={userInput} onChange={(e) => handleChange(e)} />
            <button onClick={() => props.onSearch(userInput)}>Agregar</button>
            <button onClick={() => props.onSearch(Math.floor(Math.random(userInput) * 828))}>Random</button>
            <button onClick={() => props.logOut()}>LogOut</button>
      </div>
   );
}
