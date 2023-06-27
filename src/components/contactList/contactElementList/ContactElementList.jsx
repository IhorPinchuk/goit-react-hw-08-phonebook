import PropTypes from 'prop-types';
import css from './ContactElementList.module.css';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'redux/contacts/selectors';
import { CircularProgress } from '@mui/material';

export default function ContactElementList({
  id,
  name,
  number,
  handleClickDelete,
}) {
  const { isLoadingContacts, isLoadingAddContact, isLoadingDellContact } =
    useSelector(contactsSelector);

  return (
    <>
      <p className={css.contact__list__item__text}>
        <span> {name}:</span>
        <span>{number}</span>
      </p>
      <button
        className={css.contact__list__item__btn}
        type="button"
        value={id}
        onClick={handleClickDelete}
        disabled={
          isLoadingContacts || isLoadingAddContact || isLoadingDellContact
        }
      >
        {isLoadingDellContact ? <CircularProgress size={15} /> : 'Delete'}
      </button>
    </>
  );
}

ContactElementList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleClickDelete: PropTypes.func.isRequired,
};
