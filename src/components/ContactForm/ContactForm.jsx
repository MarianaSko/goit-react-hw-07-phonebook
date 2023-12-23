import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledListItem,
  StyledBtn,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';
import { addContactsThunk } from '../../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts.items);

  const createContact = e => {
    e.preventDefault();

    const newContact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    };

    for (let item of contacts) {
      if (item.name === e.target.elements.name.value) {
        alert(`${item.name} is already in contacts.`);
        e.currentTarget.reset();
        return;
      }
    }

    dispatch(addContactsThunk(newContact));
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={createContact}>
      <ul>
        <StyledListItem>
          <StyledLabel htmlFor="name">Name </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            id="name"
            required
            value={contacts.name}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="number">Number </StyledLabel>
          <StyledInput
            type="tel"
            name="number"
            id="number"
            required
            value={contacts.phone}
          />
        </StyledListItem>
      </ul>
      <StyledBtn type="submit">Add contact</StyledBtn>
    </StyledForm>
  );
};
