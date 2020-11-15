import React from 'react';

import ContactForm from '../../components/contact-form/contact-component';

import {CollectionPageContainer, CollectionTitle } from './contact.styles';


const ContactPage = ()  => (
    
    <CollectionPageContainer>
    <CollectionTitle>Send a message to Ricardo Passinho</CollectionTitle>
    
        
          <ContactForm />
        
      
    </CollectionPageContainer>
)


export default ContactPage;