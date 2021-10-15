import React from 'react';
import Blog from './Blog';
import SearchBar from './SearchBar';
import SideBar from './SideBar';

const Main = () => {
    return (
        <div class="container mx-auto px-10 py-6">
            <SearchBar />
            <div className="flex flex-wrap justify-between">
                <Blog />
                <SideBar />
            </div>
        </div>
    );
};

export default Main;