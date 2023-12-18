import { useContext, useState } from "react";
import "./App.css";
import Counter1 from "./Components/useState/Counter-1";
import Counter2 from "./Components/useState/Counter-2";
import Counter3 from "./Components/useState/Counter-3";
import Counter4 from "./Components/useState/Counter-4";
import Effect from "./Components/useEffect/Effect";
import { AppContext } from "./Components/useContext/ParentContext";

function App() {
  const [show, setShow] = useState("Counter");
  const{isDark,setIsDark} =useContext(AppContext)

  return (
    <div style={{
      color: `${isDark?"white":"#242424"}`,

    }}>
      <div>
        <button
          onClick={() => {
            setShow("Counter");
          }}
        >
          Counter
        </button>
        <button
          onClick={() => {
            setShow("Effect");
          }}
        >
          Effect
        </button>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          {isDark?"Turn Light": "Turn Dark"}
        </button>
      </div>
      <div>
        {show == "Counter" ? (
          <>
            <Counter1 />
            <Counter2 />
            <Counter3 />
            <Counter4 />
          </>
        ) : (
          <>
            <Effect />
          </>
        )}
        {/* {if (show == "Counter") {
          
        } else {
          
        }} */}
      </div>
    </div>
  );
}

export default App;
