import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <nav class="w-full py-4 border-t border-b bg-gray-100">
            <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <Link to="/" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">React</Link>
                    <Link to="/" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Node js</Link>
                    <Link to="/" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Javascript</Link>
                    <Link to="/" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Express js</Link>
                    <Link to="/" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Mongodb</Link>
                    <Link to="/" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Firebase</Link>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;