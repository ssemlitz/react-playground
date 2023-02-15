import Pokecard from "../Pokecard/Pokecard";
import styles from './Pokedex.module.css'

const Pokedex = ({data}) => {
  return ( 
    <div className={styles.Pokedex}>
      <h1>Pokedex</h1>
      <div>
        {data.map((pokemon) => (
          <Pokecard 
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;