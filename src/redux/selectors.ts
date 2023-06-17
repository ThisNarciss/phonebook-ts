import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contacts/selectors';
import { selectFilter } from './filter/selectors';

export const selectSortContacts = createSelector([selectContacts], contacts =>
  [...contacts].sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
);
export const selectFilterContacts = createSelector(
  [selectFilter, selectSortContacts],
  (filter, contacts) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
