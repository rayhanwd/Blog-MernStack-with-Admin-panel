import React from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

const Admin = () => {

    document.title = 'Admin Panel | Technical Blog';
    return (

        <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div class="flex items-start justify-between">
                {/* sidebar */}
                <SideBar/>
                <div class="flex flex-col w-full md:space-y-4">
                    {/* //header */}
                    <Header/>
                    <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
                        Hello! {localStorage.getItem('email')}
                        </h1>
                        <h2 class="text-md text-gray-400">
                            Here&#x27;s what&#x27;s happening with your ambassador account today.
                        </h2>
                        <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div class="w-full md:w-6/12">
                                <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                                   {/* Admin */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Admin;