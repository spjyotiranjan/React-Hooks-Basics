import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

function Effect() {
    const {isDark} = useContext(AppContext)
    
    const [age,setAge] = useState(19)
    const [sib,setSib] = useState(0)
    useEffect(()=>{
        console.log("Component Mounted");
        return ()=>{
            console.log("Component UnMounted");
        }
    },[])
    useEffect(()=>{
        console.log("Age Updated");
    },[age])
    useEffect(()=>{
        console.log("Siblings Updated");
    },[sib])
    
  return (
    <div style={{
        border: `2px solid ${isDark? "White":"#242424"}`,
        backgroundColor: `${isDark?"#242424":"white"}`, 
        borderRadius: "1vw",
        padding: "1vw",
        marginBottom: "1vw",
        marginTop: "1vw",
        }}>
        <h1>U S E - E F F E C T</h1>
        <h3>Age : {age}</h3>
        <h3>Siblings : {sib}</h3>
        <button onClick={()=>{setAge(age+1)}}>Get Older</button>
        <button onClick={()=>{setSib(sib+1)}}>Get More Siblings</button>
    </div>
  )
}

export default Effect