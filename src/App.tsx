import { Counter } from "./Components/Counter";
import { User } from "./Components/User";
import { TimerFather } from './Components/TimeFather';
import { CounterRed } from "./Components/CounterRed";
import { Form } from "./Components/Form";
import { Form2 } from "./Components/Form2";

function App() {
  return (
    <>
      <hr/><h1>React + Typescript</h1><hr/>
      <Counter/>
      <User/><br/>

      <hr/><h2>UseEffect - UseRef</h2><hr/>
      <TimerFather/><br/>

      <hr/><h2>Reducer</h2><hr/>
      <CounterRed/><br/>

      <hr/><h2>CustomHooks</h2><hr/>
      <Form/><br/>
      <br/>
      <Form2/>

    </>
  );
}

export default App;
