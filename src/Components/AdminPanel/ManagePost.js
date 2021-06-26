import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

const ManagePost = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios.get(`https://peaceful-mountain-40441.herokuapp.com/posts`)
            .then(res => {
                setposts(res.data);
            })
    }, [])


    const delPost = async (_id)=>{
        await fetch(`https://peaceful-mountain-40441.herokuapp.com/delete/${_id}`,{
          method:'DELETE',
        })
            .then(res => res.json())
            .then(result => {
              if(result){
                // event.target.parentNode.style.display = 'none';
                alert('Product Delete Successfully!')
              }
            })
    }

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
                        Hello! {localStorage.getItem('email')}

                        </h1>
                        <h2 class="text-md text-gray-400">
                            Here&#x27;s what&#x27;s happening with your ambassador account today.
                        </h2>
                        <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div class="w-full md:w-12/12">
                                <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                                    {/* ManagePost */}

                                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                                        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 py-3 rounded-bl-lg rounded-br-lg">
                                            <table class="min-w-full">
                                                <thead>
                                                    <tr>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Blog title</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">description</th>
                                                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
                                                      
                                                        <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white">
                                                    {
                                                        posts.map(post =>
                                                            <tr >
                                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                                    <div class="flex items-center">
                                                                        <div>
                                                                            <div class="text-sm leading-5 text-gray-800">{post._id}</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                                    <div class="text-sm leading-5 text-blue-900">{post.title}</div>
                                                                </td>
                                                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{post.description.slice(0,100)}...</td>
                                
                                                                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                                    <button onClick={() => delPost(`${post._id}`)}class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Remove</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }



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