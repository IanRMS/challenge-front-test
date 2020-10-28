import React, { useState } from 'react';
import { LinearProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'

import { sendContact } from '../../Page/services';
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
  const [status, setStatus] = useState('');

  const handleSubmit = async (e): Promise<void> => {
    setStatus('');
    setLoading(true);
    e.preventDefault();
    console.log(name, email);
    const data = {
      'name': name,
      'email': email,
    }
    try {
      await sendContact(data);
      setStatus('success');
      setName('');
      setEmail('');
    } catch(err) {
      console.log(err);
      setStatus('error');
    }
    finally {
      setLoading(false);
    }
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
      {status !== 'success' ? 
      <>
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
      </>
      :
      <>
        <h3>Seu e-mail foi cadastrado com sucesso!</h3>
        <h4>A partir de agora você receberá as novidades e ofertas exclusivas.</h4>
        <button type="button" onClick={() => setStatus('')}>
          Cadastrar novo e-mail
        </button>
      </>
    }
    <Snackbar open={status === 'error'} autoHideDuration={5000} onClose={() => setStatus('')}>
      <MuiAlert elevation={6} variant="filled" severity="error" onClose={() => setStatus('')}>
        Ops! Algo de errado ocorreu ao enviar seus dados. Tente novamente
      </MuiAlert>
    </Snackbar>
    </Container>
  );
};

export default ContactForm;
