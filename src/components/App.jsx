import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { Toaster } from 'react-hot-toast';
// import { ContactForm } from './contactForm/ContactForm';
// import ContactList from './contactList/ContactList';
// import Filter from './filter/Filter';

export const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />        
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
    </>
    

    
  );
};
