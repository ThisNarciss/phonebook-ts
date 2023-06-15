import { ChildrenBox, Notification } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { errorNotify } from 'utils/notification';
import Container from '@mui/material/Container';
import bgImgHomePage from 'images/bg-02.webp';

export default function ContactsSection() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;
    errorNotify(error);
  }, [error]);
  return (
    <Section title="Contacts">
      <Container maxWidth="xl">
        <Container
          sx={{
            padding: '30px 0',
            display: {
              xs: 'flex',
            },
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'center' },
            alignItems: { xs: 'center' },
            gap: '50px',
            backgroundImage: `url(${bgImgHomePage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
          }}
        >
          <ContactForm />
          {contacts.length ? (
            <ChildrenBox>
              <Filter />
              <ContactList />
            </ChildrenBox>
          ) : (
            <Notification>There are no contacts in the phone book</Notification>
          )}
          {isLoading && !error && <Loader />}
        </Container>
      </Container>
    </Section>
  );
}
