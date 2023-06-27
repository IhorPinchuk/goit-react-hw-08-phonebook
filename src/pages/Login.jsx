import { Loader } from 'components/loader/Loader';
import LoginForm from 'components/loginForm/LoginForm';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';

const Login = () => {
  const { isLoading } = useSelector(authSelector);

  return isLoading ? <Loader size={100} /> : <LoginForm />;
};

export default Login;
