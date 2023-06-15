const { createSelector } = require('@reduxjs/toolkit');
const { selectContacts } = require('redux/contacts/selectors');
const { selectFilter } = require('redux/filter/selectors');

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
