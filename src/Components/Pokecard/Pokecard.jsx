import styles from './Pokecard.module.css'

const imgAPI = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

let imgPadding = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
  let imgSrc = `${imgAPI}${imgPadding(props.id)}.png`
  return ( 
    <div className={styles.Pokecard}>
      <h2 className={styles.Pokecard_name}>{props.name}</h2>
      <div>
        <img className={styles.Pokecard_img} src={imgSrc} alt="pokemon img" />
      </div>
      <div>Type: {props.type}</div>
      <div>EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;