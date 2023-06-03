import React, { createContext, useContext, useReducer } from 'react'


const AppContext=React.createContext();






const Context = ({children}) => {
//we will make a function for all the children so that they
// can get all the values 

const [state, dispatch] = useReducer(reducer,"");

const UpdateHomePage=()=>{
    return dispatch({
        type:"Home_update",
        image:"./public/hero.svg"
    });
};

  return (
  <>
  <AppContext.Provider value={{UpdateHomePage}}>
    {children}
  </AppContext.Provider>
  </>
  )
};

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export default Context
export {useGlobalContext};
