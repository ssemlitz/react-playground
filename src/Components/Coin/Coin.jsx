import styles from './Coin.module.css'

const Coin = ({side}) => {
  return ( 
    <div>
      <img className={styles.Coin} src={side} alt="silver coin" />
    </div>
  );
}

export default Coin;