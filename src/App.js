import './App.css';
// import Machine from './Components/Machine/Machine';
// import Friend from './Components/Friend/Friend';
// import Fruit from './Components/Fruit/Fruit';
// import Dog from './Components/Dog/Dog';
// import Pokedex from './Components/Pokedex/Pokedex';
import pokemon from './pokemon';
import Pokegame from './Components/Pokegame/Pokegame';

function App({props}) {
  return (
    <div>
      {/* <Pokedex data={pokemon}/> */}
      <Pokegame data={pokemon}/>
    </div>
  );
}

export default App;
