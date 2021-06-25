import React from 'react';
import Blog from '../Components/Blog/Blog';
import BlogItem from '../Components/Solution/Solution';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Subscribe from '../Components/Subscribe/Subscribe';

const Home = () => {
    return (
        <> <Header/>
            <Blog/>
            <BlogItem/>
            <Subscribe/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;