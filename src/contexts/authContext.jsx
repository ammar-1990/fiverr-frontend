import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";

const AuthContext = createContext();

 const AuthContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { user: action.payload,loading:false };
      case "LOGOUT":
        return { user: null ,loading:false};
        default:return state
    }

  };

  const [state, dispatch] = useReducer(reducer, { user: null ,loading:true});



  useEffect(()=>{
const theUser = localStorage.getItem('currentUser')
if(theUser) return dispatch({type:'LOGIN',payload:JSON.parse(theUser)})
else{
  dispatch({type:'LOGIN',payload:null})
}

  },[])

  return <AuthContext.Provider value={{...state,dispatch}}>{children}</AuthContext.Provider>;
};


export default AuthContextProvider

export const useAuth = ()=>useContext(AuthContext)

