import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux'

export function Card(props) {
   // const onClick = () => props.onClose(props.name)
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.deleteFavorites(props.id)
      }
      else {
         setIsFav(true);
         props.addFavorites(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


   return (
      <div className={styles.container}>
         <div className={styles.front}>
            <img className={styles.image} src={props.image} alt="Personaje de R&M" />
            <h2 className={styles.data}>{props.name}</h2>
         </div>
         <div className={styles.back}>
            <div className={styles.buttonContainer}>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
               <button onClick={() => props.onClose(props.id)}>X</button>
            </div>
            <h2>{'Species: '} {props.species}</h2>
            <h2>{'Gender: '}{props.gender}</h2>
            <h2>{'Id: '} {props.id}</h2>
            <h2>{'Status: '} {props.status}</h2>
            <Link to={`/detail/${props.id}`}>
               <div className={styles.cardName}>{'¿ More info ?'}</div>
            </Link>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch)
{
   return bindActionCreators({addFavorites, deleteFavorites}, dispatch);
}


export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)