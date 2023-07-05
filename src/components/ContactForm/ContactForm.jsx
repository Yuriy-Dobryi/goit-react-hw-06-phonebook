import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from '../App.module.css';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  function inputChange(e) {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      return;
    }
    setNumber(value);
  }

  function submitClick(e) {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number }

    addContact(newContact);
    setName('');
    setNumber('');
  }

  
  return (
    <form onSubmit={submitClick}>
        
      <label>
        Name
        <input className={styles.input}
          onChange={inputChange}
          value={name}
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
          onChange={inputChange}
          value={number}
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};