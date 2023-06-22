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

















// const url = `https://648ae0fd17f1536d65e9e3fc.mockapi.io/contacts`;

// export const fetchContacts = async () => {
//   return await fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.warn(error);
//     });
// };

// export const addContact = async newContact => {
//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(newContact),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return await response.json();
// };

// export const deleteContact = async id => {
//   const response = await fetch(`${url}/${id}`, {
//     method: 'DELETE',
//   });
//   return await response.json();
// };
