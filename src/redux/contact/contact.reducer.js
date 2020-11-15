import { ContactActionTypes } from './contact.types';

const INITIAL_STATE = {
  contact: null
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    case ContactActionTypes.SEND_CONTACT:
      return {
        ...state,
        contact: action.payload
      }
     case ContactActionTypes.CLEAN_FORM:
       return {
          CLEAN: action.payload
       }
    default:
      console.log({state});
      return state;
  }
};

export default contactReducer;
