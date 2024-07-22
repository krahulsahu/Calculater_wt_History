import React from 'react'
import { useState } from 'react'
import './App.css'

const Calculater = () => {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]); 

const handleEqual = () => {
  try {
    const result = eval(value);
    const newHistory = JSON.parse(localStorage.getItem("history")) || [];
    newHistory.push(`${value} = ${result}`);
    localStorage.setItem("history", JSON.stringify(newHistory));
    setValue(result.toString());
  } catch (error) {
    setValue("Error");
  }
};

    
  return (
    <div className="container">
      <div className="calculator">
        <form action=""onSubmit={(e) => e.preventDefault()}>
          <div className='inputbox'>
            <input type="text" value={value}  readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={e=>setValue('')}/>
            <input type="button" value="DE" onClick={e=>setValue(value.slice(0,-1))}/>
            <input type="button" value="." onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="/" onClick={e=>setValue(value+e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="8" onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="9" onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="*" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="5" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="6" onClick={e=>setValue(value+e.target.value)}/>
            <input type="button" value="+" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1"onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="2"onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="3"onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="-" onClick={e=>setValue(value+e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="0" onClick={e=>setValue(value+e.target.value)} />
            <input type="button" value="=" className='result' onClick={handleEqual}/>
          </div>
        </form>

      </div>
      
    </div>
  );
}

export default Calculater;