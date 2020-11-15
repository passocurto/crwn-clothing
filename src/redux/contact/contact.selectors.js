import { createSelector } from 'reselect';

const selectContact = state => state.contact;

export const selectCurrentContact = createSelector(
  [selectContact],
  contact => contact.currentContact
);
