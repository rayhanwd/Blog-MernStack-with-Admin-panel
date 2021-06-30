import React from 'react';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Subscribe from '../Components/Subscribe/Subscribe';
import Main from './../Components/Blog/Main';

const Home = () => {
    document.title = 'Javascript pain killer | JS Blog';
    return (
        <> <Header/>
            <Main/>
            <Subscribe/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;