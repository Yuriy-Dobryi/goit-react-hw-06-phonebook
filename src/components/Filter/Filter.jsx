import PropTypes from "prop-types";
import stylesApp from '../App.module.css'

export const Filter = ({ filter, setFilter }) => (
  <label>
    Find contacts by name
    <input className={stylesApp.input}
      onChange={({target}) => setFilter(target.value)}
      value={filter}
      type="tel"
      name="filter"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};