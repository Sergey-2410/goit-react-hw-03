import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ filterContacts, handleDelete }) => {
  return (
    <ul className={s.contactList}>
      {filterContacts.map(contact => (
        <li className={s.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            handleDelete={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
