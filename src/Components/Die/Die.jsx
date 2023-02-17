import styles from './Die.module.css'

const Die = ({num, rolling}) => {
  
  return ( 
    <i className={`${styles.Die} fas fa-dice-${num} ${rolling && styles.shaking}`}></i>
  );
}

export default Die;