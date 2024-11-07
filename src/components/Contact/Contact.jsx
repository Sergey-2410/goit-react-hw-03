import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
const Contact = ({ name, number }) => {
  return (
    <div className={s.box}>
      <div className={s.boxContact}>
        <p className={s.text}>
          <FaUser /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={s.btnClear} type="button">
        Delete
      </button>
    </div>
  );
};
export default Contact;
