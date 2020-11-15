import { ContactActionTypes } from './contact.types';

export const send_contact = () => ({
  type: ContactActionTypes.SEND_CONTACT,
  payload: contact
});

export const clean = () => ({
  type: ContactActionTypes.CLEAN,
});

export const cancel = () => ({
  type: ContactActionTypes.CANCEL,
});


