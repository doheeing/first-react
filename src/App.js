import { useState, useEffect } from "react";
import "./App.css";
// import BoxClass from "./component/BoxClass";
import Box from "./component/Box"

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0)
  const [value, setValue] = useState(0) // useState 의 변수로 초깃값을 넣어줌
  const increase = () =>{
    counter = counter + 1
    setCounter2(counter2+1) // 변수는 값을 바꾸면 바로 적용이 되지만, state를 바꾸는 건 함수가 다 끝난 후에 실행됨(=비동기적)
    console.log(counter2)
    setValue(value+2)
  }
  useEffect(()=>{
    console.log("useEffect11")
  }, [])
  useEffect(()=>{
    console.log("useEffect22", counter2, value)
  },[counter2, value])
  return (
    <div>
          {console.log("render")}
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
