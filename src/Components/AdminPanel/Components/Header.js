import React from 'react';
import { useHistory } from 'react-router-dom';
const Header = () => {

    const history = useHistory()

    const handleSignOut = () => {
        localStorage.removeItem('email');
        history.push('/login');
    }

    return (
        <header class="w-full h-16 z-40 flex items-center justify-between">
            <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div class="relative p-1 flex items-center w-full space-x-4 justify-end">
                    <button onClick={() => handleSignOut()} class="flex items-center text-gray-500 dark:text-white text-md">
                        LogOut
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;