import React, { useState } from 'react'
import './BMIcalculator.css'
import Navbar from '../../App'

const BMIcalculator = () => {
    const[height,setHeight] = useState('')
    const [weight,setWeight] = useState('')
    const [bmi,setBMI] = useState('');

    const heightHandler=(e)=>{
        setHeight(e.target.value);
    }
    const weightHandler=(e)=>{
        setWeight(e.target.value);
    }

    const calculateBMI =()=>{
        setBMI((weight / (height/100)**2).toFixed(2))
    };

  return (
    <>
    <Navbar/>
    <div className='main'>
        <h1>BMI Calculator</h1>
        <div>
        <label>Height in cm</label>
        <input type='text' value={height} placeholder='00' onChange={heightHandler}/>
        </div>
        <div>
        <label>Weight in kg</label>
        <input type='text' placeholder='00' value={weight} onChange={weightHandler}/>
        </div>
        <div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <h3>Your BMI is {bmi}</h3>
        </div>
    </div>
    </>
  )
}

export default BMIcalculator