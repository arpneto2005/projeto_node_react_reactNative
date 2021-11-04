import React from 'react';
//import Header from './Header';
import './global.css';
//import Logon from './pages/Logon/';
import Routes from './routes';

function App() {
  return (
      <Routes />
    );
}

export default App;

/**
 * 
  function increment(){
    setCounter(counter + 1);
    console.log(counter);
  }

  <Header> Contador: {counter} </Header>
    <button onClick={increment}> Incrementar </button>
    const [counter, setCounter] = useState(0);

 */