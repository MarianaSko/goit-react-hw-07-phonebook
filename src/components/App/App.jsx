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

export const App = () => {
  const { items } = useSelector(state => state.phonebook.contacts);
  const { error } = useSelector(state => state.phonebook.contacts);
  const { isLoading } = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <StyledMainHeading>Phonebook</StyledMainHeading>
      <ContactForm />
      <StyledHeading>Contacts</StyledHeading>
      {items?.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <StyledMessage>
          You don't have any contacts in your phonebook yet.
        </StyledMessage>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Container>
  );
};
