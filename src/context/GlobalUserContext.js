import React, { useState, createContext } from "react"

// CREATING THE CONTEXT AS THE NAME OF GLOBALUSERCONTEXT
export const GlobalUserContext = createContext()

// CREATING THE DATA USING PROVIDER
// THAT DATA WILL BE PASSED DOWN TO EVERY CHILD ELEMENT WRAPPED AROUND THIS SINGLE JSX TAG, GIVING THEM ANYTHING WE PROVIDE AS VALUE
export const GlobalUserProvider = (props) => {
  const [globalUser, setGlobalUser] = useState("admin")
  return (
    <GlobalUserContext.Provider value={[globalUser, setGlobalUser]}>
      {props.children}
    </GlobalUserContext.Provider>
  )
}
