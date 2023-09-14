import React from 'react';

import { Container } from './contact.styles';

class Contact extends React.Component {  

  render() {
  return (
      <Container>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf65hcNyXPIedPQU-pIsOfJOEsTxAK3BuO4B9zDDrLQMhRuEA/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
      </Container>
    );
  }
}

export default Contact;
