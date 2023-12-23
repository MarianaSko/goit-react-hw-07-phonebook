import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactItem,
  StyledBtn,
  StyledSpan,
} from './ContsctListItem.styled';
import { deleteContactsThunk } from '../../redux/operations';

export const ContactListItem = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.phonebook.filter);
  const contacts = useSelector(state => state.phonebook.contacts);

  const getFilteredContacts = () => {
    return contacts.items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return getFilteredContacts().map(item => (
    <StyledContactItem key={item.id}>
      <p>
        <StyledSpan>{item.name}:</StyledSpan> {item.phone}
      </p>
      <StyledBtn onClick={() => dispatch(deleteContactsThunk(item.id))}>
        Delete
      </StyledBtn>
    </StyledContactItem>
  ));
};
