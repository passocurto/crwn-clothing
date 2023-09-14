import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { Formik } from 'formik';

import { Container, Title } from './contact.styles';

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      description: '',
      message: ''
    };
  }
   
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, description, message } = this.state;
    
    // looking for a solution to send a email that works
    console.log(  name + email + description + message  );

    try {
      this.setState({
        name: '',
        email: '',
        description: '',
        message: ''
      });
      
    } catch (error) {
      console.error(error);
    }

  };

  render() {

    const { name, email, description, message } = this.state;

    return (
      <Container>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf65hcNyXPIedPQU-pIsOfJOEsTxAK3BuO4B9zDDrLQMhRuEA/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
      </Container>
    );
  }
}

export default Contact;
