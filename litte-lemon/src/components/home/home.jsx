import React from 'react';
import './home.css';
import Main from '../main/main';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

const Home = () => {

  return (
    <>
        <div className="header-navbar-container">
          <Header />
          <Navbar />
        </div>
        <main>
            <Main />
        </main>
        <Footer></Footer>
    </>
  );
}

export default Home;
