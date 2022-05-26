import React from 'react';

const Blog = () => {
    return (
        <div>
            
    <section class="bg-base-100 dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <h1 class="text-2xl text-center font-semibold text-green-800 lg:text-4xl dark:text-white">Frequently asked questions.</h1>
            
            <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                <div>
                    <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div>
                        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">How will you improve the performance of a React Application?</h1>

                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        I can improve the performance of a react application by follow those things. I will keep my component state local where necessary. Memoizing react components to prevent unnecessary re renders. By using dynamic import() code splitting. List or windowing virtualization in react.Lazy loading images in react.
                        </p>
                    </div>
                </div>

                <div>
                    <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div>
                        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">What are the different ways to manage a state in a React application?</h1>

                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        he four kinds of react state to manage. Local state , global state , server state, and last one URL state.Local state is easy to manage. Try to use those hooks to manage local state they are useState, useCallback, useReducer. To manage global state in react those hooks are very usefull they are useReducer, useContext.
                        </p>
                    </div>
                </div>

                <div>
                    <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div>
                        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">How does prototypical inheritance work?</h1>

                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        This prototypical inheritance is a feature in javascript used to add methods and properties in objects. Its is a method by which an object can inherit the properties and methods of another object in order to get and set the prototype of an object we use object
                        </p>
                    </div>
                </div>
                <div>
                    <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div>
                        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>

                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        If we directly update the state it doesn't change the state immediately. In this case it creates a pending state transition and accessing it after calling this method will only return the present value we will lose control of the state across all components.
                        </p>
                    </div>
                </div>
                <div>
                    <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div>
                        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">What is a unit test? Why should write unit tests?</h1>

                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Purpose of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly it can help detect early flaws in code which may be more difficult to find in later testing stage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Blog;