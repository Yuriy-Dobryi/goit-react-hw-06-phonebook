import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setDefaultContacts(_, {payload}) {
      return [...payload];
    },
    addContact(state, {payload: {name, number}}) {
      state.push({
        id: nanoid(),
        name,
        number,
      });
    },
    removeContact(state, {payload}) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { setDefaultContacts, addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;