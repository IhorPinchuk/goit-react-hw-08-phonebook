// import { login } from "components/services/authApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "redux/auth/authThunks";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk({email, password} ))
    // login({email, password })
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