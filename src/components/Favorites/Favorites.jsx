import styles from './Favorites.module.css';
import { connect } from 'react-redux'
import Cards from '../Cards/Cards';


export function Favorites({ myFavorites }) {
    console.log(myFavorites)
    return (
        <div className={styles.container}>
                <Cards characters={myFavorites}
                />
        </div>
    );
}


export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites

    }
}

export default connect(mapStateToProps, null)(Favorites)