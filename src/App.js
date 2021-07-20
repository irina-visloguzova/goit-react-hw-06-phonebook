import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import PhoneBook from './components/PhoneBook/PhoneBook';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

function App({ items }) {

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>

      {items.length > 0 ? (
        <>
          <Filter />
          <ContactList>
            <PhoneBook />
          </ContactList>
        </>
      ) : (
        <span className={s.subTitle}>You have no contacts!</span>
      )}
    </>
  )
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

export default connect(mapStateToProps)(App);