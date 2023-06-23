
import { instance } from "./baseUrl";

export const getContacts = async () => {
  const { data } = await instance('/contacts');  
    return data;
}

export const addContact = async (body) => {
  return await instance.post('/contacts', body)
};

export const deleteContact = async id => {
  return await instance.delete(`/contacts/${id}`);    
    
};

