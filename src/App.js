import './App.css';
import Machine from './Components/Machine/Machine';
import Friend from './Components/Friend/Friend';

function App({props}) {
  return (
    <div>
      
      <Machine 
        s1="X"
        s2="X"
        s3="X"
      />
      <Friend 
        name='Elton'
        hobbies={['singing','dancing','running']}
      />  
      <Friend 
        name='Jennie'
        hobbies={['gaming','volleyball','exercising']}
      />  
    </div>
  );
}

export default App;
