import { ContactForm } from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import css from './Phonebook.module.css';
import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { contactsSelector } from 'redux/contacts/selectors';
import { authSelector } from 'redux/auth/selectors';

const Phonebook = () => {
  const { isLoadingContacts, isLoadingAddContact, isLoadingDellContact } =
    useSelector(contactsSelector);
  const { isLoading } = useSelector(authSelector);
  return (
    <>
      {isLoading && <LinearProgress />}
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.contact_wrapper}>
          <section className={css.contact_form}>
            <ContactForm />
          </section>
          <section className={css.contact_list_wrapper}>
            <h2 className={css.title_contacts}>Contacts</h2>
            <Filter />
            {(isLoadingContacts ||
              isLoadingAddContact ||
              isLoadingDellContact) && <LinearProgress />}
            <ContactList />
          </section>
        </div>
      </div>
    </>
  );
};

export default Phonebook;
