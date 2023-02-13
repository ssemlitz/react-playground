import './App.css';
import Machine from './Components/Machine/Machine';

function App() {
  return (
    <div>
        <h1>Slot Machines!</h1>
        <Machine
          s1="🍒"
          s2="🍒"
          s3="🍒"
        />
        <Machine
          s1="🍒"
          s2="🍒"
          s3="🍊"
        />
      </div>
  );
}

export default App;
