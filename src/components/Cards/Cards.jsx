import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards({characters, onClose}) {
  
  return (
    <div className={styles.container}>
      {characters.map((character, index) => (
        <Card key={`${character.name} - ${index}`}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
          status={character.status}
          location={character.location.name}
          origin={character.origin.name}
          />
          ))}
    </div>
  );
} 
