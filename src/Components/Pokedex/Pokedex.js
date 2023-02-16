import Pokecard from "../Pokecard/Pokecard";
import styles from './Pokedex.module.css'

const Pokedex = ({pokemon, exp, isWinner}) => {
  let title

  if (isWinner) {
    title = <h1 className={styles['Pokedex-winner']}>Winning Hand</h1>;
  } else {
    title = <h1 className={styles['Pokedex-loser']}>Losing Hand</h1>;
  }
  
  return ( 
    <div className={styles['Pokedex']}>
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className={styles['Pokedex-card']}>
        {pokemon.map((p) => (
          <Pokecard 
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;