import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postContactsThunk } from 'redux/contacts/contactsThunk';
import { contactsSelector } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const { contacts } = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const newContact = {
    name,
    number,
  };

  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactNameToLowerCase = contacts.map(contact =>
      contact.name.toLowerCase()
    );
    if (contactNameToLowerCase.includes(name.toLowerCase())) {
      Notify.failure(`${name} is already in contacts.`);
      return;
    }
    dispatch(postContactsThunk(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.input_label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Enter name"
          onChange={handleChangeName}
        />
      </label>
      <label className={css.input_label}>
        Number
        <input
          className={css.input}
          format="(###) ###-##-##"          
          type="tel"
          name="number"
          pattern="^[0-9]+$"          
          required
          value={number}
          placeholder="Enter phone number"
          onChange={handleChangeNumber}
        />
      </label>
      <button className={css.form__btn} type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
};
