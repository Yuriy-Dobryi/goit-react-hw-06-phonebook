import styles from './ContactList.module.css'

export const ContactItem = ({ contact: { id, name, number }, removeContact }) => (
  <li className={styles.item}>
    <p className={styles.info}>
      {name}: {number}
    </p>
    <button className={styles.btn} onClick={() => removeContact(id, name)}>Delete</button>
  </li>
);