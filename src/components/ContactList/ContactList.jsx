import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';

import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from './ContactItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)

  function filterContacts() {
    const lowerCaseFilter = filter.toLocaleLowerCase();
    if (filter) {
      const modifiedContacts = contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(lowerCaseFilter)
      )
      if (modifiedContacts.length === 0) {
        Notify.info('No contacts with this name🤔');
      }
      return modifiedContacts;
    }
    return [...contacts];
  }
  
  const filteredContacts = filterContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
}