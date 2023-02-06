
import './App.css';
import {Route,Routes,Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import BMIcalculator from './Components/BMI/BMIcalculator';
import NormalCalculator from './Components/Normal Calculator/NormalCalculator';
import TempratureCalculator from './Components/Temprature Calculator/TempratureCalculator'
import CurrencyCalculator from './Components/Currency Calculator/CurrencyCalculator'
import ExpenseCalculator from './Components/Expense Calculaltor/ExpenseCalculator';
import { useEffect, useState } from 'react';
function App() {
  return (
    <> 
       <div className="App">
      
      <Routes>

    <Route path='*' element={<Navbar/>} />
    <Route path='/NormalCalculater' element={<NormalCalculator/>} />
    <Route path='/TempratureCalculator' element={<TempratureCalculator/>} />
    <Route path='/CurrencyCalculator' element={<CurrencyCalculator/>} />
    <Route path='/BMIcalculator' element={<BMIcalculator/>} />
    <Route path='/ExpenseCalculator' element={ <ExpenseCalculator/>} />
      </Routes>
    
    </div>
    </>

  );
}

export default App;

//==============Navbar=============================

const Navbar=()=>{
  const location = useLocation();

  const[theme,setTheme] = useState("light-theme")

  useEffect(()=>{
    document.body.className = theme;
  },[theme])

  const modeHandler=()=>{
      if(theme === "dark-theme"){
        setTheme("light-theme")
      }else{
        setTheme("dark-theme")
      }
  }

  if(location.pathname !== '' && location.pathname !== ''){
    return(
      <>
      <h1 className='appMain'>All in One Calculator</h1>
      <button onClick={modeHandler}>Change Theme</button>
      <div className='Main-btn'>
        <div>
          <button><Link className='txt' to="/NormalCalculater">Normal Calculator</Link></button>
        </div>

        <div>
          <button><Link className='txt' to="/TempratureCalculator">Temprature Calculator</Link></button>
        </div>

        <div>
          <button><Link className='txt' to="/CurrencyCalculator">Currency Calculator</Link></button>
        </div>

        <div>
          <button><Link className='txt' to="/BMIcalculator">BMI Calculator</Link></button>
        </div>

        <div>
          <button><Link className='txt' to="/ExpenseCalculator">Expense Calculator</Link></button>
        </div>

      </div>
      </>
    )
  }


}












