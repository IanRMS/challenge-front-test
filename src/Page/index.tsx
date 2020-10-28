import React from 'react';

import ContactForm from '../components/ContactForm';
import CorebizCarousel from '../components/CorebizCarousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
    <Header/>
    <CorebizCarousel/>
    <Products/>
    <ContactForm/>
    <Footer/>
    </Container>
  );
};

export default Page;
