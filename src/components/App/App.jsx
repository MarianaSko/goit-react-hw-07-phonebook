import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import {
  Container,
  StyledMessage,
  StyledMainHeading,
  StyledHeading,
} from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const { contacts } = useSelector(state => state.phonebook);

  return (
    <Container>
      <StyledMainHeading>Phonebook</StyledMainHeading>
      <ContactForm />
      <StyledHeading>Contacts</StyledHeading>
      {contacts.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <StyledMessage>
          You don't have any contacts in your phonebook yet.
        </StyledMessage>
      )}
    </Container>
  );
};
