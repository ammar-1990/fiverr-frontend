import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

const AuthContext = createContext();

 const AuthContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { user: action.payload };
      case "LOGOUT":
        return { user: null };
        default:return state
    }

  };

  const [state, dispatch] = useReducer(reducer, { user: null });

  return <AuthContext.Provider value={{...state,dispatch}}>{children}</AuthContext.Provider>;
};


export default AuthContextProvider

export const useAuth = ()=>useContext(AuthContext)

