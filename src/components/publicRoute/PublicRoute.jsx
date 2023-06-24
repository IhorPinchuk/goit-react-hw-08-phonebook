import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelector } from "redux/auth/selectors";

const PublicRoute = ({ children }) => {
    const { token: isAuth } = useSelector(authSelector)
        return !isAuth ? children : <Navigate to='/contacts' />
}

export default PublicRoute;