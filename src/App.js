import { useState } from "react";
import "./App.css";
// import BoxClass from "./component/BoxClass";
import Box from "./component/Box"

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0) // useState 의 변수로 초깃값을 넣어줌
  const increase = () =>{
    counter = counter + 1
    setCounter2(counter2+1)
    console.log(counter2)
  }
  return (
    <div>
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
