import React from 'react';

const Subscribe = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h2 class="text-lg font-semibold uppercase my-3">Get a update from javascript blog</h2>
            <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0">
              <div class=" relative ">
                <input type="text" id="&quot;form-subscribe-Subscribe" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
              </div>
              <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Subscribe
              </button>
            </form>

          </div>
          <div className="w-1/2">
            <img className="mx-auto p-5" src="https://cdni.iconscout.com/illustration/free/thumb/blog-writer-2043032-1731291.png" alt="s" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;