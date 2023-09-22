import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("")

  const handlClick =(e)=>{
    setResult(result.concat(e.target.name))
  }
  const clear=()=>{
    setResult("")
  }
  const backspace=()=>{
    setResult(result.slice(0,-1))
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult('Error')
    }
  }
  return (
    <>
    <h1>React Calculator</h1>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className='highlight' onClick={clear} id='clear'>Clear</button>
          <button className='highlight' onClick={backspace} id='backspace'>C</button>
          <button className='highlight' name='/' onClick={handlClick}>/</button>
          <button name='7' onClick={handlClick}>7</button>
          <button name='8' onClick={handlClick}>8</button>
          <button name='9' onClick={handlClick}>9</button>
          <button className='highlight' name='*' onClick={handlClick}>&times;</button>
          <button name='4' onClick={handlClick}>4</button>
          <button name='5' onClick={handlClick}>5</button>
          <button name='6' onClick={handlClick}>6</button>
          <button className='highlight' name='-' onClick={handlClick}>&ndash;</button>
          <button name='1' onClick={handlClick}>1</button>
          <button name='2' onClick={handlClick}>2</button>
          <button name='3' onClick={handlClick}>3</button>
          <button className='highlight' name='+' onClick={handlClick}>+</button>
          <button name='0' onClick={handlClick}>0</button>
          <button className='highlight' name='.' onClick={handlClick}>.</button>
          <button className='highlight' onClick={calculate} id='equal'>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
