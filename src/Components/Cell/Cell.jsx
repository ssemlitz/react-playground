import style from './Cell.module.css'

const Cell = (props) => {

  const { isLit, flipCellsAroundMe } = props

  function handleClick(evt) {
    flipCellsAroundMe()
  }

  return ( 
    <>
      <td className={isLit ? `${style.CellLit}` : `${style.Cell}`} onClick={handleClick}/>
    </>
  );
}

export default Cell;