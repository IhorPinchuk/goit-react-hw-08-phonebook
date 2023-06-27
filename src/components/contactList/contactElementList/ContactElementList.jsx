import PropTypes from 'prop-types';
import css from './ContactElementList.module.css';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'redux/contacts/selectors';
// import { Button, CircularProgress, LinearProgress } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactElementList({
  id,
  name,
  number,
  handleClickDelete,
}) {

 const { isLoadingContacts, isLoadingAddContact, isLoadingDellContact } = useSelector(contactsSelector) 

  return (
    <>
      {/* <div className={css.contact_element_scroll}> */}
      {/* <div className={css.contact_element_wrapper}> */}
      <p>
        {name}:
      </p>
      <p>
        {number}
      </p>
      <button
        className={css.contact__list__item__btn}
          type="button"
          value={id}
          onClick={handleClickDelete}
          disabled={isLoadingContacts || isLoadingAddContact || isLoadingDellContact}
        >       
        {/* <LinearProgress color='secondary'/>   */}
          Delete        
        </button>
      {/* </div> */}
      {/* </div> */}

      {/* <AccessAlarmIcon>
        <ThreeDRotation>
<svg data-testid="DeleteIcon"><DeleteIcon/></svg>
        </ThreeDRotation>
      </AccessAlarmIcon> */}
      
      {/* <DeleteIcon color="secondary" /> */}

      
      
      {/* <Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button> */}
      
      {/* <CircularProgress /> */}
      {/* <LinearProgress /> */}

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
