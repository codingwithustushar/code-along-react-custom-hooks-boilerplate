import React from 'react'

const useStorage = () => {
    let setStorage =(val)=>{
        localStorage.setItem("data",val)
        sessionStorage.setItem("data",val)
    }
  return {setStorage}
}

export default useStorage