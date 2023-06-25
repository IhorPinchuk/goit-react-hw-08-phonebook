import PropTypes from 'prop-types';
import css from './ContactElementList.module.css';

export default function ContactElementList({
  name,
  number,
  handleClickDelete,
}) {
  return (
    <>
      <div className={css.contact_element_wrapper}>
      <p>
        <span>{name}:</span><span>{number}</span>
      </p>
      <button
        className={css.contact__list__item__btn}
        type="button"
        onClick={handleClickDelete}
      >
        Delete
        </button>
        </div>
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
