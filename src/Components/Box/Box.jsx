import styles from './Box.module.css'

const Box = ({color}) => {
  return ( 
    <div className={styles.Box} style={{backgroundColor: color}}>

    </div>
  );
}

export default Box;