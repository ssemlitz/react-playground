import './App.css';
// import Machine from './Components/Machine/Machine';
import Friend from './Components/Friend/Friend';

function App({props}) {
  return (
    <div>
      <Friend 
        name='Elton'
        hobbies={['singing','dancing','running']}
      />  
    </div>
  );
}

export default App;
