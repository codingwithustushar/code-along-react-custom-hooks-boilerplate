import { useEffect, useState } from 'react'
import './App.css'
import useStorage from './Customhooks/UseStorage'
function App() {
  let {setStorage}= useStorage()

  return (
    <>
    <h2>Enter Some Text</h2>
      <input type="text" placeholder='Enter Some Text' style={{padding:" 5px 10px"}} onChange={(e)=>setStorage(e.target.value)}  />
    </>
  )
}

export default App