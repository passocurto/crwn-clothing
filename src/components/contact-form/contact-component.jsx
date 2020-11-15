import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, description, message } = this.state;

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

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, description, message } = this.state;
    return (
      <Container>
        <Title>Would u like talk?</Title>
        <span>Send a message to developer</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            label='name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='description'
            name='description'
            value={description}
            onChange={this.handleChange}
            label='description'
            required
          />
          <FormInput
            type='message'
            name='message'
            value={message}
            onChange={this.handleChange}
            label='message'
            required
          />
          <CustomButton type='submit'>SEND MESSAGE</CustomButton>
        </form>
      </Container>
    );
  }
}

export default Contact;
