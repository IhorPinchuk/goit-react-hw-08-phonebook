import LoginForm from "components/loginForm/LoginForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "redux/auth/selectors";

const Login = () => {
const {token: isAuth} = useSelector(authSelector)
    const navigate = useNavigate();

    useEffect(() => {
isAuth && navigate('/contacts')
    }, [isAuth, navigate])
    
    return (
    <LoginForm />
)
}

export default Login;