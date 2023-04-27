import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
