import { nanoid } from 'nanoid';

export const addContact = ({name, number}) => {
  return {
    type: 'tasks/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = contactID => {
  return {
    type: 'tasks/removeContact',
    payload: contactID,
  };
};

export const setFilter = value => {
  return {
    type: 'filters/setFilter',
    payload: value,
  };
};