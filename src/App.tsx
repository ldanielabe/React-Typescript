import { Counter } from "./Components/Counter";
import { User } from "./Components/User";
import { TimerFather } from './Components/TimeFather';
import { CounterRed } from "./Components/CounterRed";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr/>
      
      <Counter/>
      <User/>

      <h2>UseEffect - UseRef</h2>
      <hr/>

      <TimerFather/>

      <h2>Reducer</h2>
      <hr/>

      <CounterRed/>
    </>
  );
}

export default App;
