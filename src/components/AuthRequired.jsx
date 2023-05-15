import { useAuth } from "../contexts/authContext"
import { Navigate } from "react-router-dom"

const AuthRequired = ({children}) => {

    const {user ,loading} = useAuth()
  return (
!user && !loading ? <Navigate to={'/'} /> : children
  )
}

export default AuthRequired