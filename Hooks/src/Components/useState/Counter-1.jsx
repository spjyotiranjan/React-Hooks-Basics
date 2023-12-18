import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext/ParentContext'

function Counter1() {
    const{isDark} =useContext(AppContext)

    const [currAge,setAge] = useState(20)
    const incAge10 =()=>{
        // setAge(currAge+10)
        for (let i = 0; i < 10; i++) {
            setAge((prev)=>prev+1)
        }
    }
    const decAge =()=>{
        setAge(currAge-1)
    }
  return (
    <div style={{
        border: `2px solid ${isDark? "White":"#242424"}`,
        backgroundColor: `${isDark?"#242424":"white"}`,
        borderRadius: "1vw",
        padding: "1vw",
        marginBottom: "1vw",
        marginTop: "1vw",
        }}>
        <h1>C O U N T E R - 1</h1>
        <h2>Age : {currAge}</h2>
        <button onClick={
            ()=>{
                setAge(currAge+1)
            }
        }>Get Older</button>
        <button onClick={decAge}>Get Younger</button>
        <button onClick={incAge10}>Get Older by 10</button>
    </div>
  )
}

export default Counter1