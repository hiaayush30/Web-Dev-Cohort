import { createContext, useEffect, useState } from "react";

export const modeContext=createContext(null);

export const ModeContextProvider=({children})=>{
    const [dark,setDark]=useState(false);
    useEffect(() => {
        if (dark) {
          document.documentElement.classList.add('dark');
          // document.documentElement refers to the root element of an HTML document, which is the <html> tag.
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [dark]);
    return(
        <modeContext.Provider value={{dark,setDark}}>
            {children}
        </modeContext.Provider>
    )
}