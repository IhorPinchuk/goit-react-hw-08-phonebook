// import { login } from "components/services/authApi";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { loginThunk } from "redux/auth/authThunks";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ email, password })).unwrap().then((res) => {      
      // navigate('/contacts')
      toast.success(`Welcome ${res.user.name}!!!`);
    }).catch((error) => {
      toast.error('Invalid email or password.');
      return error;
    })    
  }

  const handleChange = ({target:{value, name}}) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  }



    return (
<form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input          
          type="email"
            name="email"
            value={email}
            onChange={handleChange}
          placeholder="Enter email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
            name="password"
            value={password}
            onChange={handleChange}
          placeholder="Enter password"
        />
      </label>
      <button type="submit" disabled={!email || !password}>
        Log In
      </button>
      <div></div>
    </form>
    )
}

export default LoginForm;