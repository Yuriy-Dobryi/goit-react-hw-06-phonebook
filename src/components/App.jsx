import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { setDefaultContacts, setFilter } from 'redux/actions';
import { DEFAULT_CONTACTS, CONTACTS_KEY } from 'redux/constants';

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import styles from './App.module.css'

export function App() {
  const [status, setStatus] = useState('idle');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => { 
    const localContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    dispatch(setDefaultContacts(localContacts ? [...localContacts] : []));
  }, [dispatch]);

  useEffect(() => { 
    localStorage.setItem(CONTACTS_KEY, JSON.stringify([...contacts]));
    setStatus('pending');
    const isContactsEmpty = contacts.length === 0;

    if (isContactsEmpty) {
      setStatus('rejected');
      dispatch(setFilter(''));
    } else {
      setStatus('resolved');
    }
  }, [contacts, dispatch]);

  return (
    <div className="container">
      <div className={styles.phonebook}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2 className={styles.title}>Contacts</h2>
        {status === 'resolved' && (
          <>
            <Filter />
            <ContactList />
          </>
        )}

        {status === 'rejected' && (
          <>
            <p>There is no contacts</p>
            <button
              className={styles.btn}
              onClick={() => dispatch(setDefaultContacts(DEFAULT_CONTACTS))}
            >
              Default Contacts
            </button>
          </>
        )}
      </div>
    </div>
  );
}