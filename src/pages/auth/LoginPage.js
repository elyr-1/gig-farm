import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/appbar/Header';
import LoginForm from './LoginForm';
import Footer from '../../components/footer/Footer';

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
