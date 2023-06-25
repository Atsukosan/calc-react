import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [ans, setAns] = useState(null);
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);
  const [oper, setOper] = useState("+")
  const [err, setErr] = useState("")

  const Operate = ()=>{
    setErr("")
    if (inp1 === "" || inp2 === "") {
      return
    }

    const value1 = +inp1 
    const value2 = +inp2 

    if (oper == "+"){
      setAns(value1+value2)
    }
    if (oper == "-"){
      setAns(value1-value2)
    }
    if (oper == "*"){
      setAns(value1*value2)
    }
    if (oper == "/"){
      if(value2 == 0){
        setErr("На ноль делить нельзя")
      }
      setAns(value1/value2)
    }
  }

  return (
    <div className="App">
      <input type='number' value={inp1} onChange={(e)=>{setInp1(e.target.value)}}/>
      <select onChange={(e)=>{setOper(e.target.value)}}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"*"}>*</option>
        <option value={"/"}>/</option>
      </select>
      <input type='number' value={inp2} onChange={(e)=>{setInp2(e.target.value)}}/>
      <button onClick={()=>{Operate()}}>=</button>
      <p>Ответ: {ans}</p>
      {err && <p>{err}</p>}
    </div>
  );
}

export default App;
