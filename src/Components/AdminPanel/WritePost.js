import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Header from './Components/Header';
import SideBar from './Components/SideBar';

const WritePost = () => {

    document.title = 'WritePost Panel | Technical Blog';
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [data, setData] = useState();
    const onSubmit = data => {
        const eventData = {
            title: data.title,
            description: data.description,
            image: imageURL,
        };
        const url = `https://peaceful-mountain-40441.herokuapp.com/addpost`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            // .then(res => console.log('server side response', res))
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {

                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {

            });

    }
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
                            Hello! {localStorage.getItem('email')}

                        </h1>
                        <h2 class="text-md text-gray-400">
                            Here&#x27;s what&#x27;s happening with your ambassador account today.
                        </h2>
                        <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div class="w-full md:w-12/12">
                                <div class="relative overflow-hidden">
                                    {/* WritePost */}
                                    {
                                        data?<h3 class="text-xl mt-10 font-semibold text-gray-800 dark:text-white" style={{ textAlign: 'center' }}>Post added successfully!</h3>:
                                    <div class="flex h-screen items-center justify-center  mt-5 mb-5">
                                        <div class="grid bg-white rounded-lg shadow-xl w-full md:w-12/12">
                                            <div class="flex justify-center py-10">
                                                <div class="flex">
                                                    <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Write new post</h1>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div class="grid grid-cols-1 mt-5 mx-7">
                                                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Post title</label>
                                                    <input name="title"  {...register("title")} class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Post title" />
                                                </div>
                                                <div class="grid grid-cols-1 mt-5 mx-7">
                                                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Description</label>
                                                    <input name="description"   {...register("description")} class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="description" />
                                                </div>
                                                <div class="grid grid-cols-1 mt-5 mx-7">
                                                    <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                                                    <div class='flex items-center justify-center w-full'>
                                                        <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                                                            <div class='flex flex-col items-center justify-center pt-7'>
                                                                <svg class="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                                <p class='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                                                            </div>
                                                            <input type='file' class="hidden" onChange={handleImageUpload} />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                                                    <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                                                    <input type='submit' class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' value="Create" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default WritePost;