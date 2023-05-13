import { useAuth } from "../contexts/authContext"
import { Navigate } from "react-router-dom"

const AuthRequired = ({children}) => {

    const {user} = useAuth()
  return (
!user ? <Navigate to={'/login'} /> : children
  )
}

export default AuthRequired