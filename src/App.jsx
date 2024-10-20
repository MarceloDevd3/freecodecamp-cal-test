import { useState } from 'react'
import './App.css'

function App() {
  const [sum, setSum] = useState(0)
  const [display, setDisplay] = useState('0')

  const clearDisplay = () => {
    setDisplay('0')
  }

  const appendNum = (num) => {
     
   if(display === '0'){
      setDisplay(num)
   }else {
    setDisplay(display + num)
   }
   setDisplay(prev => prev.replace(/\.{2,}/, '.'))

   if(/^\d{1,2}\.\d$/.test(display)) {
   setDisplay(prev => prev.replace(/^\d{1,2}\.\d$/, '.'))
   }

   // ^\d{1,2}\.\d$

    /*
      setSum(prev => prev + num)
      if(sum === '0' || sum === '.'){
        /replace more than one 0 in the string  
       // setSum(prev => prev.replace(/0+/gi, '0'))
        replace more than one . in the string  
        //setSum(prev => prev.replace(/\.{2,}/g, '.'))
       // console.log(typeof sum)
      }
    */

  }

  const result = () => {
    if(display.includes('0')) {
      if(/0+/g.test(display)) {
        setDisplay(prev => prev.replace(/0+/g, '0'))
      }
    }
 
   // conto .

    setDisplay(prev => eval(prev))

    

   console.log(typeof display)
  }


  return (
    <main>
      <article id='cal-container'>
        <input type='text' name="cal" id='display' value={display} disabled />
        <div className='btns'>

          <button id='clear' onClick={clearDisplay}>C</button>
          
          <button id='add' onClick={() => appendNum('+')}>+</button>
          <button id='seven' onClick={() => appendNum('7')}>7</button>
          <button id='eight' onClick={() => appendNum('8')}>8</button>
          <button id='nine' onClick={() => appendNum('9')}>9</button>

          <button id='multiply' onClick={() => appendNum('*')}>*</button>
          <button id='four' onClick={() => appendNum('4')}>4</button>
          <button id='five' onClick={() => appendNum('5')}>5</button>
          <button id='six' onClick={() => appendNum('6')}>6</button>

          <button id='subtract' onClick={() => appendNum('-')}>-</button>
          <button id='one' onClick={() => appendNum('1')}>1</button>
          <button id='two' onClick={() => appendNum('2')}>2</button>
          <button id='three' onClick={() => appendNum('3')}>3</button>

          <button id='divide' onClick={() => appendNum('/')}>/</button>
          <button id='zero' onClick={() =>  appendNum('0')}>0</button>
          <button id='equals'  onClick={result}>=</button>
          <button id='decimal' onClick={() =>  appendNum('.')}>.</button>

        </div>
      </article>
    </main>
  )
}

export default App
