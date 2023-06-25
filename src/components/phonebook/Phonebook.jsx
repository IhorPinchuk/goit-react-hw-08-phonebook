import { ContactForm } from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import css from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.contact_wrapper}>
        <section className={css.contact_form}>
          <ContactForm />
        </section>
        <section className={css.contact_list_wrapper}>
          <h2 className={css.title_contacts}>Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </div>
  );
};

export default Phonebook;
