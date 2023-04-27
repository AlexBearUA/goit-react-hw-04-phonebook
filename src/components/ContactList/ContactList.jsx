import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.ContactListItem}>
          <ContactListItem
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
