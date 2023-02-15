import styles from './Pokecard.module.css'

const imgAPI = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

const Pokecard = (props) => {
  let imgSrc = `${imgAPI}${props.id}.png`
  return ( 
    <div className={styles.Pokecard}>
      <h2>{props.name}</h2>
      <div>
        <img src={imgSrc} alt="pokemon img" />
      </div>
      <div>Type: {props.type}</div>
      <div>EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;