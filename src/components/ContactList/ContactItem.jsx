import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import { getContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';
import styles from './ContactList.module.css';

export default function ContactItem({ contact: { id, name, number } }) {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function removeContactHandle(id, name) {
    Notify.success(`${name} has been removed`);
    if (contacts.length - 1 === 0) {
      Notify.info('You deleted all contacts🙄');
    }
    dispatch(removeContact(id));
  }

  return (
    <li className={styles.item}>
      <p className={styles.info}>
        {name}: {number}
      </p>
      <button
        className={styles.btn}
        onClick={() => removeContactHandle(id, name)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
