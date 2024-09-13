import './App.css';
import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
