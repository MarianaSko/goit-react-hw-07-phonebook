import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactItem,
  StyledBtn,
  StyledSpan,
} from './ContsctListItem.styled';
import { deleteContactsThunk } from '../../redux/operations';

export const ContactListItem = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector(state => state.phonebook);
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return getFilteredContacts().map(({ id, name, phone }) => (
    <StyledContactItem key={id}>
      <p>
        <StyledSpan>{name}:</StyledSpan> {phone}
      </p>
      <StyledBtn onClick={() => dispatch(deleteContactsThunk(id))}>
        Delete
      </StyledBtn>
    </StyledContactItem>
  ));
};
