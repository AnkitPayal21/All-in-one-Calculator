import React, { useState } from 'react'
import './TempratureCalculator.css'
import Navbar from '../../App'


const TempratureCalculator = () => {
 
   
      const [temprature,setTempratue] = useState(0);
      const [unit,setUnit] = useState('C');

      const inputHandler =(e) =>{
        setTempratue(e.target.value);
      };

      const unitHandler = (e)=>{
        setUnit(e.target.value);
      };

      const celcius = unit === 'F' ? (temprature - 32)*(5/9):temprature;
      const fehrenheit = unit === 'C' ? (temprature * 9/5)+32:temprature;
      


    

  return (

  <>
  <Navbar/>
    <div className='Main'>
      <h1>Temprature Calculator</h1>

      <div className='inpt'>

      <input type='text' value={temprature} onChange={inputHandler}/>

      <select value={unit} onChange={unitHandler}>
        <option value='C'>Celcius</option>
        <option value='F'>Fehrenheit</option>
      </select>

      </div>

      <h3>{temprature}° {unit} </h3>
      <h2> is {celcius} °C  </h2> 
      <h4>or</h4> 
       <h5> is {fehrenheit} °F</h5>
      
    </div>
    </>
  )
}

export default TempratureCalculator