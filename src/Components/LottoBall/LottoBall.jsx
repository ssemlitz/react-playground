import styles from './LottoBall.module.css'

const LottoBall = ({num}) => {
  return ( 
    <div className={styles.Ball}>
      {num}
    </div>
  );
}

export default LottoBall;