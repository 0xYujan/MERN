//UseState();
//Syntax
//const [value, setValue] = useState(initialValue)

import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increase2  =()=> setCount2(count2 +2)

  useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count +1)
    },1000)
    return () =>{
      clearInterval(timer)
    }
  },[count])

  return (
    <>
      {count > 0 && (
          <button className="btn btn-danger" onClick={decrement}>
            -
          </button>
        )}
      <h1>{count}</h1>
      <br />
      <h1>{count2}</h1>
      <button className="btn btn-success" onClick={increment}>
        +
      </button>
      <button className="" onClick={increase2}> Increase Count 2</button>
    </>
  );
};

export default Counter;
