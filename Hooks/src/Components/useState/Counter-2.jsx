import React, { useContext, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

function Counter2() {
    const [age,setAge] = useState(19)
    const [sib,setSib] = useState(1)
    const {mainCount,isDark} = useContext(AppContext)
    const incAge =()=> setAge(age + 1)
    const incSib =()=> setSib(sib + 1)
    const decSib =()=> sib>0?setSib(sib -1):setSib(sib)
  return (
    <div style={{
        border: `2px solid ${isDark? "White":"#242424"}`,
        backgroundColor: `${isDark?"#242424":"white"}`,
        borderRadius: "1vw",
        padding: "1vw",
        marginBottom: "1vw",
        marginTop: "1vw",
        }}>
      <h1>C O U N T E R - 2</h1>
      <h2>My Current Age is {age}</h2>
      <h3>My siblings: {sib}</h3>
      <h3>Main Count: {mainCount}</h3>
      <button onClick={incAge}>Get Older</button>
      <button onClick={incSib}>Get more Sib</button>
      <button onClick={decSib}>Get less Sib</button>
    </div>
  );
}

export default Counter2;
