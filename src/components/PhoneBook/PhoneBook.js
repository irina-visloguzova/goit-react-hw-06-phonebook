import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import s from './PhoneBook.module.css';

const ContactItem = ({ onDeleteContact, contactsItems }) => (
  <>
    {contactsItems.map(({ id, name, number }) => {
      return (
        <li key={id} className={s.item}>
          <p className={s.itemName}>{`${name}: ${number}`}</p>
          <button type="button" onClick={() => onDeleteContact(id)} className={s.button}>
            Delete
          </button>
        </li>
      );
    })}
  </>
);


const getCurrentContacts = (allContacts, filter) => {
  const regExp = new RegExp(filter, 'gi');

  if (filter) {
    return allContacts.filter(contact => regExp.test(contact.name));
  }
  return allContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contactsItems: getCurrentContacts(items, filter),
});

const mapDispatchFromProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactItem);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
