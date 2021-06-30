import React from 'react';
import Navs from './../Navs/Navs';
import Banner from './../Banner/Banner';
import TopNav from '../TopNav/TopNav';

const Header = () => {
    return (
        <>
            <Navs/>
            <Banner/>
            <TopNav/>
        </>
    );
};

export default Header;