import './App.css';
import { useState, UseEffect } from "react";


function App() {
  const [preState, setPerState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (a) => {

  };

  const operatorType = (a) =>{

  };

  const equals = (a) =>{

  };

  const minusplus = () =>{

  };

  const percent = () =>{

  };

  const reset = () => {

  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className = "sereen">
          <div className="btn light-gray" onClick={reset}>AC</div>
          <div className="btn light-gray" onClick={percent}>%</div>
          <div className="btn light-gray" onClick={minusplus}>+/-</div>
          <div className="btn orange" onClick={operatorType}>/</div>
          <div className="btn" onClick={inputNum}>7</div>
          <div className="btn" onClick={inputNum}>8</div>
          <div className="btn" onClick={inputNum}>9</div>
          <div className="btn orange" onClick={operatorType}>X</div>
          <div className="btn" className={inputNum}>4</div> 
          <div className="btn" className={inputNum}>5</div>
          <div className="btn" className={inputNum}>6</div>
          <div className="btn orange" onClick={operatorType}>+</div>
          <div className="btn" onClick={inputNum}>1</div>
          <div className="btn" onClick={inputNum}>2</div>
          <div className="btn" onClick={inputNum}>3</div>
          <div className="btn orange" onClick={operatorType}>-</div>
          <div className="btn" onClick={inputNum}>0</div>
          <div className="btn" onClick={inputNum}>.</div>
          <div className="btn" onClick={equals}>=</div>


        </div>
      </div>
      
    </div>
  );
}

export default App;
