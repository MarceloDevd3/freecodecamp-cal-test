import { useState, useEffect } from 'react'
import './App.css'


const operators = ['+', '-', '/', 'X', '=', 'AC'];

const CalcKeys = [
  {id: 'clear', value: 'AC' },
  {id: 'divider', value: '/' },
  {id: 'multiply', value: 'X' },
  {id: 'seven', value: 7 },
  {id: 'eight', value: 8 },
  {id: 'nine', value: 9 },
  {id: 'subtract', value: '-' },
  {id: 'four', value: 4 },
  {id: 'five', value: 5 },
  {id: 'six', value: 6 },
  {id: 'add', value: '+' },
  {id: 'one', value: 1 },
  {id: 'two', value: 2 },
  {id: 'three', value:3 },
  {id: 'equal', value: '=' },
  {id: 'zero', value: 0 },
  {id: 'decimal', value: '.' }
]

const numbers = [0,1,2,3,4,5,6,7,8,9];

const Display = ({input, output}) => {
    return (
      <div id='output'>
       <span className='result'>{output}</span>
       <span id='display' className='input'>{input}</span>
    </div>
    )
}

const Key = ({keyData : {id, value}, hundleInput}) => { 
  return (  <button id={id} onClick={() => hundleInput(value)}>{value}</button>  )
}

const Keyboard = ({hundleInput}) => {
     return (
      <div className='keys'>
 {CalcKeys.map((key) => (
  <Key key={key.id} keyData={key} hundleInput={hundleInput} />
 ))}
</div>
     )
}





function App() {


  const [input, setInput] = useState('0')
  const [output, setOutput] = useState('')
  const [calculator, setCalculator] = useState('')


  const hundleInput = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);
    switch (value) {
      case  '=':
         hundleSubmit();
      break
      case  'AC':
        hundleClear();
      break  
      case  number:
        hundleDecimal();
      break
      case  '.':
        hundleDot();
      break
      case  operator:
        hundleNumber();
      break
    }
  }

  const hundleSubmit = () => {

  } 
  const hundleClear = () => {
    
  } 
  const  hundleDecimal = (value) => {
    
  } 
  const hundleNumber = (value) => {
    
  } 
  const hundleDot = (value) => {
    
  } 

  useEffect(() => {
    hundleInput()
  }, [calculator])


  return (
    <div className='container'>
      <div className='calcultator'>
      <h1>ola</h1>
      <Display input={input} output={output}/>
      <Keyboard hundleInput={hundleInput}/>
      </div>
    </div>
  )
}

export default App
