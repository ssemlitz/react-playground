import './App.css';
// import Machine from './Components/Machine/Machine';
// import Friend from './Components/Friend/Friend';
// import Fruit from './Components/Fruit/Fruit';
// import Dog from './Components/Dog/Dog';
import pokemon from './pokemon';
import Pokedex from './Components/Pokedex/Pokedex';

function App({props}) {
  return (
    <div>
      <Pokedex data={pokemon}/>
    </div>
  );
}

export default App;
