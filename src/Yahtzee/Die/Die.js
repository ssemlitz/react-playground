import "./Die.css";

const Die = () => {
  return ( 
    <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.props.handleClick}
      >
        {this.props.val}
      </button>
  );
}

export default Die;