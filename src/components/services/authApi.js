import { instance } from "./baseUrl";


export const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
}

export const dellToken = () => {
   delete instance.defaults.headers.common['Authorization'];
}

export const register = async (body) => {
  return await instance.post('/users/signup', body)
      
}

export const login = async (body) => {
  const { data } = await instance.post('/users/login', body);
      if ('token' in data) setToken(data.token)
    return data;
}

export const getProfile = async () => {  
  const { data } = await instance('/users/current');
      return data;
}

export const logOut = async () => {
  const { data } = await instance.post('/users/logout');
  dellToken();
  return data;
}