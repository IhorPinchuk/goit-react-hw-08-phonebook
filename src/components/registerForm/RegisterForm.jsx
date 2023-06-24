
import { register } from 'components/services/authApi';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    }).then(() => navigate('/login')).catch(error => {          
      toast.error('Invalid email or password. The minimum password length must be 7 characters');
      
      return error.response.data.message     
    })
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter user name"
        />
      </label>
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
      <button type="submit" disabled={!name || !email || !password}>Sign Up</button>
    </form>
  );
};

export default RegisterForm;
