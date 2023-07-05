import PropTypes from "prop-types";
import { ContactItem } from './ContactItem'

export const ContactList = ({ contacts, removeContact }) => (
  <ul>
    {contacts.map((contact) => (
      <ContactItem key={contact.id}
        contact={contact}
        removeContact={removeContact} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired
  ).isRequired,
};