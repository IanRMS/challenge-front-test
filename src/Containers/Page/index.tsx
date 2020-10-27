import React from 'react';
import ContactForm from '../../components/ContactForm';
import CorebizCarousel from '../../components/CorebizCarousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <Header/>
     <CorebizCarousel/>
     <ContactForm></ContactForm>
     <Footer/>
    </Container>
  );
};

export default Page;
