import React from "react";
import styles from './About.module.css';
export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.front}>
                <img className={styles.image} src={require('../../assets/foto.jpeg')} alt="Personaje de R&M" />
                <h2 className={styles.data}>Joaquín S. Oliveira</h2>
            </div>
            <div className={styles.back}>
                <h2>{'Species: '} Human</h2>
                <h2>{'Gender: '} Male</h2>
                <h2>{'Id: '} 1</h2>
                <h2>{'Status: '} Aún vivo</h2>
                <h2>Creador de esta app</h2>
            </div>
        </div>
    );
}
