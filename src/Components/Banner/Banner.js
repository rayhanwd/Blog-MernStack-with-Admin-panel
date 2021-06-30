import React from 'react';

const Banner = () => {
    return (
        <header class="w-full container mx-auto">
            <div class="flex flex-col items-center py-12">
                <a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                Technical Blog
                </a>
                <p class="text-lg text-gray-600">
                    A javascript development blog
                </p>
            </div>
        </header>
    );
};

export default Banner;