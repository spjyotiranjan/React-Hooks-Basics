import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ParentContext, {
  AppContext,
} from "./Components/useContext/ParentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <ParentContext>
      <App />
    </ParentContext>
  </div>
);
