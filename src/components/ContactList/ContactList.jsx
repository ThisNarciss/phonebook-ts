import { ContactItem } from 'components/ContactItem/ContactItem';

import { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const getFilteredContacts = useSelector(selectFilterContacts);

  const firstLetterArr = useMemo(() => {
    return getFilteredContacts
      .map(item => item.name.slice(0, 1))
      .map((item, index, array) => array.indexOf(item) === index);
  }, [getFilteredContacts]);

  return (
    <List>
      {getFilteredContacts.map((contact, idx) => {
        return (
          <ContactItem
            key={contact.id}
            bool={firstLetterArr[idx]}
            {...contact}
          />
        );
      })}
    </List>
  );
};
