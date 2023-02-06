import React, { useState } from 'react'
import './NormalCalculator.css'
import Navbar from '../../App'



const NormalCalculator = () => {

  const[result,setResult]=useState("")

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }
  const ClearInput=()=>{
    setResult('');
  }
  const calculate =()=>{
    setResult(eval(result).toString());
  }

  return (
    <>
    <Navbar/>
    <div className='Ncalculate'>
      <h1>Normal Calculator</h1>
      <input type='text' className='inpt' placeholder='0' value={result}/>
      <div className='btn'>
      <input type='button' value='C' onClick={ClearInput}/>
      <input type='button' value='%' onClick={clickHandler}/>
      <input type='button' value='clr' onClick={ClearInput}/>
      <input type='button' value='/' onClick={clickHandler}/> 
      </div>
      <div className='btn'>
      <input type='button' value='7' onClick={clickHandler}/>
      <input type='button' value='8' onClick={clickHandler}/>
      <input type='button' value='9' onClick={clickHandler}/>
      <input type='button' value='*' onClick={clickHandler}/>
      </div>
      <div className='btn'>
      <input type='button' value='4' onClick={clickHandler}/>
      <input type='button' value='5' onClick={clickHandler}/>
      <input type='button' value='6' onClick={clickHandler}/>
      <input type='button' value='-' onClick={clickHandler}/> <br/>
      </div>
      <div className='btn'>
      <input type='button' value='1' onClick={clickHandler}/>
      <input type='button' value='2' onClick={clickHandler}/>
      <input type='button' value='3' onClick={clickHandler}/>
      <input type='button' value='+' onClick={clickHandler}/> <br/>
      </div>
      <div className='btn'>
      <input type='button' value='00' onClick={clickHandler}/>
      <input type='button' value='0' onClick={clickHandler}/>
      <input type='button' value='.' onClick={clickHandler}/>
      <input type='button' value='=' onClick={calculate}/>
      </div>
      </div>
    </>
  )
}

export default NormalCalculator