import css from './ContactList.module.css';
import ContactElementList from 'components/contactList/contactElementList/ContactElementList';
import { filteredContacts } from 'components/filter/filteredContacts';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/contacts/selectors';
import { filterSelector } from 'redux/filter/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelector);
  const getFilteredContacts = filteredContacts(contacts, filter);
 

  const handleClickDelete = (id) => {
  dispatch(deleteContactThunk(id))
}

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

    
  return (
    <ul className={css.contact__list}>
      {getFilteredContacts.map(({ id, name, number }) => (
        <li className={css.contact__item} key={id}>
          <ContactElementList
            id={id}
            name={name}
            number={number}
            handleClickDelete={(e) => { 
              // if (e.target.value === id ) {
              //   console.log('Привіт');
              // } 
              // console.log('id :>> ', id);
              // console.log('object :>> ', e.currentTarget.value);
              // console.log('target :>> ', e.target);
              handleClickDelete(id)
            }}
            
          />
        </li>
      ))}
    </ul>
  );
}
