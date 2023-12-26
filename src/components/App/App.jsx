import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import {
  Container,
  StyledMessage,
  StyledMainHeading,
  StyledHeading,
} from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <StyledMainHeading>Phonebook</StyledMainHeading>
      <ContactForm />
      <StyledHeading>Contacts</StyledHeading>
      {contacts?.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <StyledMessage>
          You don't have any contacts in your phonebook yet.
        </StyledMessage>
      )}
      {isLoading && <StyledMessage>Loading...</StyledMessage>}
      {error && <StyledMessage>{error}</StyledMessage>}
    </Container>
  );
};
