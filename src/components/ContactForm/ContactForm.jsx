import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';
import styles from '../App.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts  = useSelector(getContacts);

  function submitClick(e) {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = {name: name.value, number: number.value };

    const isNameExist = contacts.some(({ name }) =>
      name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (isNameExist) {
      Notify.failure(`${newContact.name} is already in your contacts.🧐`);
      return;
    }

    dispatch(addContact(newContact));
    Notify.success(`${newContact.name} has been added`);
    e.target.reset();
  }

  return (
    <form onSubmit={submitClick}>
        
      <label>
        Name
        <input className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles.btn} type="submit">Add contact</button>
    </form>
  )
}