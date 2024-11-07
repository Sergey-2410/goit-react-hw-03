import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ filterContacts }) => {
  return (
    <ul className={s.contactList}>
      {filterContacts.map(contact => (
        <li className={s.contactItem} key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
