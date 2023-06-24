import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelector } from "redux/auth/selectors";

const PrivateRoute = ({ children }) => {
    const { token: isAuth } = useSelector(authSelector)
    return isAuth ? children : <Navigate to='/login' />        
    
}

export default PrivateRoute;