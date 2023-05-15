import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
    return <ul>
        {contacts.map(({name, id, number}) => {
            return <li key={id}>
                <p>{name}: {number}</p>
                <button id={id} onClick={e => onClick(e.currentTarget.id)} type="button">Delete contact</button>
                </li>
        })}
    </ul>
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onCLick: PropTypes.func,
};