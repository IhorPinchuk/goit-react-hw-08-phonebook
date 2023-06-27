import { Loader } from 'components/loader/Loader';
import RegisterForm from 'components/registerForm/RegisterForm';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';

const Register = () => {
  const { isLoading } = useSelector(authSelector);
  return isLoading ? <Loader size={100} /> : <RegisterForm />;
};

export default Register;
