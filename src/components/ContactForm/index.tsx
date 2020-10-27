import { LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';

import { 
  Container, 
  ErrorMessage, 
  Input, 
  InputContainer, 
  LoadingContainer,
  Title 
} from './styles';
import { ValidateEmail, ValidateName } from './utils/validationField';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    console.log(name, email);
  }

  const disabledSubmit = (): boolean => {
    if (!email.length || ValidateEmail(email) || !name.length || ValidateName(name)) {
      return true
    }
    return false
  }

  return (
    <Container>

      {loading &&
        <LoadingContainer>
          <LinearProgress/>
        </LoadingContainer>
      }
      <Title>Participe de nossas news com promoções e novidades!</Title>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input 
              type="text" 
              name="name" 
              placeholder="Digite seu nome" 
              value={name} 
              onChange={e => setName(e.target.value)}
              error={ValidateName(name)}
              autoComplete="off"
              disabled={loading}
              />
            {ValidateName(name) &&
              <ErrorMessage>Preencha com seu nome completo</ErrorMessage>
            }
          </InputContainer>
          <InputContainer>
            <Input 
              type="email" 
              name="email" 
              placeholder="Digite seu e-mail" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              autoComplete="off"
              error={ValidateEmail(email)}
              disabled={loading}
              />
            {ValidateEmail(email) &&
              <ErrorMessage>Preencha com um e-mail válido</ErrorMessage>
            } 
          </InputContainer>
          <button type="submit" disabled={disabledSubmit() || loading}>Eu quero!</button>
        </form>
    </Container>
  );
};

export default ContactForm;
