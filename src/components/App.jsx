import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contactData => {
    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    const contact = { ...contactData, id: nanoid() };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
        </>
      )}
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
