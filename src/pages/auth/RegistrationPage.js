import React from 'react';
import Header from '../../components/appbar/Header';
import Footer from '../../components/footer/Footer';
import RegistrationForm from './RegistrationForm';

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default RegistrationPage;
