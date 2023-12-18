import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
    const [mainCount, setMainCount] = useState(100)
    const [isDark,setIsDark] = useState(true)

    const incCount =()=> setMainCount(mainCount + 1)

  return <AppContext.Provider value={{mainCount,setMainCount,incCount,isDark,setIsDark}}>{children}</AppContext.Provider>;
};

export default ParentContext;
