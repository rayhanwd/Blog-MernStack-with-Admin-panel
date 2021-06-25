import React from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

const ManagePost = () => {

    document.title = 'ManagePost Panel | Technical Blog';
    return (

        <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div class="flex items-start justify-between">
                {/* sidebar */}
                <SideBar />
                <div class="flex flex-col w-full md:space-y-4">
                    {/* //header */}
                    <Header />
                    <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
                            Good afternoom, Charlie
                        </h1>
                        <h2 class="text-md text-gray-400">
                            Here&#x27;s what&#x27;s happening with your ambassador account today.
                        </h2>
                        <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div class="w-full md:w-12/12">
                                <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                                    {/* ManagePost */}

                                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                                        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                                            <table class="min-w-full">
                                                <thead>
                                                    <tr>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white">
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="flex items-center">
                                                                <div>
                                                                    <div class="text-sm leading-5 text-gray-800">#1</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                <span class="relative text-xs">active</span>
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="flex items-center">
                                                                <div>
                                                                    <div class="text-sm leading-5 text-gray-800">#1</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                <span class="relative text-xs">active</span>
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="flex items-center">
                                                                <div>
                                                                    <div class="text-sm leading-5 text-gray-800">#1</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                                <span class="relative text-xs">not active</span>
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="flex items-center">
                                                                <div>
                                                                    <div class="text-sm leading-5 text-gray-800">#1</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                <span class="relative text-xs">active</span>
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="flex items-center">
                                                                <div>
                                                                    <div class="text-sm leading-5 text-gray-800">#1</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                            <div class="text-sm leading-5 text-blue-900">Damilare Anjorin</div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">damilareanjorin1@gmail.com</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+2348106420637</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                            <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                                <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                                <span class="relative text-xs">disabled</span>
                                                            </span>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                            <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default ManagePost;