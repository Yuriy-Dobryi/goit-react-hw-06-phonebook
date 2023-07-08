import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [] },
  reducers: {
    setDefaultContacts(state, action) {
      state.list.push(...action.payload);
    },
    addContact(state, action) {
      state.list.push({
        id: nanoid(),
        ...action.payload
      });
    },
    removeContact(state, action) {
      return { list: state.list.filter(contact => contact.id !== action.payload) };
    },
  },
});

export const { setDefaultContacts, addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;