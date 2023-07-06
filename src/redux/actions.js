import { nanoid } from 'nanoid';

export const setDefaultContacts = defaultContacts => {
  return {
    type: 'contacts/setDefaultContacts',
    payload: defaultContacts,
  };
}

export const addContact = ({name, number}) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
}

export const removeContact = contactID => {
  return {
    type: 'contacts/removeContact',
    payload: contactID,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};