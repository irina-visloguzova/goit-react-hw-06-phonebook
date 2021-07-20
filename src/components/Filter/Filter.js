import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.formNameTitle }>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={s.formNameInput}></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchFromProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);