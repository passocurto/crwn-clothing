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
        <Title>Would u like talk?</Title>
        <span>Send a message to developer</span>
        <Formik  initialValues={{ email: '', password: '' }}

        validate={values => {
          const errors = {};
 
          if (!values.email) {
             errors.email = 'Required';
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = 'Invalid email address';
           }
           return errors;
         }}
 
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
          }, 400);
        }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
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
          { errors.password && touched.password && errors.password }
          <CustomButton>SEND MESSAGE</CustomButton>
        </form>
        )}
        </Formik>
      </Container>
    );
  }
}

export default Contact;
