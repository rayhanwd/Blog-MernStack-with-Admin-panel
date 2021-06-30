import React from 'react';
import Blog from './Blog';
import SideBar from './SideBar';

const Main = () => {
    return (
        <div class="container mx-auto flex flex-wrap py-6">
            <Blog/>
            <SideBar/>
        </div>
    );
};

export default Main;