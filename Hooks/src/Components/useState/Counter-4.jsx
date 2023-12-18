import React, { useContext, useState } from 'react'
import { AppContext } from '../useContext/ParentContext';

function Counter4() {
    const{isDark} =useContext(AppContext)
    const [currAge, setAge] = useState(19);
    const [currSib, setSib] = useState(3);

  return (
    <div style={{
        border: `2px solid ${isDark? "White":"#242424"}`,
        backgroundColor: `${isDark?"#242424":"white"}`,
        borderRadius: "1vw",
        padding: "1vw",
        marginBottom: "1vw",
        marginTop: "1vw",
        }}>
      <h1>C O U N T E R - 4</h1>
      <h2>My Current Age is {currAge}</h2>
      <h3>My siblings: {currSib}</h3>
      <button onClick={()=>{setAge((prev)=> prev + 1)}}>Get Older</button>
      <button onClick={()=>{{setAge(0)} setSib(0)}}>Reset</button>
      <button onClick={()=>{setSib((prev)=> prev + 1)}}>Get more Sib</button>
    </div>
  )
}

export default Counter4