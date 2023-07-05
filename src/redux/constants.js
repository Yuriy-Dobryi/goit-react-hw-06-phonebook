import { nanoid } from 'nanoid';

export const DEFAULT_CONTACTS = Object.freeze([
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Rosie Sompson', number: '145-23-65' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(), name: 'Jack Shepart', number: '345-53-81' },
]);

export const CONTACTS_KEY = 'contacts';