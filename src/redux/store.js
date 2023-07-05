import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/setDefaultContacts':
      return {
        ...state,
        contacts: [...action.payload],
      };
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/removeContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);