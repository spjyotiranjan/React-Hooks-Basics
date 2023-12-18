import React, { useContext, useState } from "react";
import { AppContext } from "../useContext/ParentContext";

function Counter3() {
  const [data, setData] = useState({ age: 19, siblings: 3 });
  const { age, siblings } = data;
  const { incCount, isDark } = useContext(AppContext);
  const incAge = () => {
    setData({
      ...data,
      age: data.age + 1,
    });
  };
  const incSib = (sib) => {
    setData({
      ...data,
      [sib]: data[sib] + 1,
    });
  };
  return (
    <div
      style={{
        border: `2px solid ${isDark ? "White" : "#242424"}`,
        backgroundColor: `${isDark?"#242424":"white"}`,
        borderRadius: "1vw",
        padding: "1vw",
        marginBottom: "1vw",
        marginTop: "1vw",
      }}
    >
      <h1>C O U N T E R - 3</h1>
      <h2>My Current Age is {data.age}</h2>
      <h3>My siblings: {siblings}</h3>
      <button onClick={incCount}>+ Count</button>
      <button onClick={incAge}>Get Older</button>
      <button
        onClick={() => {
          incSib("siblings");
        }}
      >
        Get more Sib
      </button>
    </div>
  );
}

export default Counter3;
