import React from 'react';

const Contact = () => {
    return (

        <div class="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
            <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <div class="flex justify-center py-4">
                        <h3>Technical Blog</h3>
                </div>

                <div class="flex justify-center">
                    <div class="flex">
                        <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Ask a Question</h1>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div class="grid grid-cols-1">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                        <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Your first name" required/>
                    </div>
                    <div class="grid grid-cols-1">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                        <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Your last name" required />
                    </div>
                </div>
                
                <div class="grid grid-cols-1 mt-5 mx-7">
                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Your Question</label>
                    <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Your message" required />
                </div>
                <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    <input type='submit' class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' value="Submit"/>
                </div>

            </div>
        </div>
    );
};

export default Contact;