import { useState } from 'react'
import './App.css'

function App() {
  const [back,setBack]=useState()

  const backgroundChange=(bgColor)=>{
    // alert(bgColor)
    setBack(bgColor)
  }

  return (
    <div className='app' style={{background:back}}>
      <div className='myBox'>
        <input type='button' value="red" style={{background:'red'}} onClick={(e)=>backgroundChange(e.target.value)}></input>
        <input type='button' value="blue" style={{background:'blue'}} onClick={(e)=>backgroundChange(e.target.value)}></input>
        <input type='button' value="green" style={{background:'green'}} onClick={(e)=>backgroundChange(e.target.value)}></input>
        <input type='button' value="White" style={{background:'white'}} onClick={(e)=>backgroundChange(e.target.value)}></input>
        <input type='button' value="yellow" style={{background:'yellow'}} onClick={(e)=>backgroundChange(e.target.value)}></input>
        <input type='button' value="black" style={{background:'black',color:"white"}} onClick={(e)=>backgroundChange(e.target.value)}></input>
        <input type='button' value="gray" style={{background:'gray'}} onClick={(e)=>backgroundChange(e.target.value)}></input>
      </div>
    </div>
  )
}

export default App
