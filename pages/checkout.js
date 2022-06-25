import React from 'react';

const Checkout = () => {
    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className='w-1/2'>
                    <h2 className='text-center mt-6 '>Update Address</h2>
                    <h1 className='text-sm text-slate-600'>Personal Details</h1>
                    <div>
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input required type="text" id="name" name="name" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="flex space-x-5">
                        <div className='w-1/2'>
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input required type="email" id="email" name="email" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="number" className="leading-7 text-sm text-gray-600">Number</label>
                            <input required type="text" id="number" name="number" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <hr className='mt-6 mb-3' />
                    <h1 className='text-sm text-slate-600 mt-6 '>Shipping Information</h1>
                    <div className="w-full">
                        <div className="flex space-x-5" >
                            <div className='w-1/2'>
                                <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country</label>
                                <input required type="text" id="country" name="country" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                                <input required type="text" id="city" name="city" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="flex space-x-5" >
                            <div className='w-1/2'>
                                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                                <input required type="text" id="state" name="state" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className='w-1/2 flex space-x-5'>
                                <div className="w-1/2">
                                    <label htmlFor="zip" className="leading-7 text-sm text-gray-600">Zip</label>
                                    <input required type="text" id="zip" name="zip" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="tel" className="leading-7 text-sm text-gray-600">Tel</label>
                                    <input type="text" id="tel" name="tel" placeholder='Optional' className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="home" className="leading-7 text-sm text-gray-600">Home / Road</label>
                            <input required type="text" id="home" name="home" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                    </div>
                    <div className="div">
                        <h2 className='text-center mt-6 '>Payment Methods</h2>
                        <h1 className='text-sm text-slate-600'>Online Banking</h1>
                        <ul className='relative '>
                            <li className='px-5  py-1 bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer active:text-orange-700 inline mr-1 border rounded-md' >Bkash</li>
                            <li className='px-5 py-1 bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer active:text-orange-700 inline mr-1 border rounded-md' >Nagad</li>
                            <li className='px-5 py-1 bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer active:text-orange-700 inline mr-1 border rounded-md' >Rocket</li>
                            <li className='px-5 py-1 bg-gray-200 hover:bg-gray-400 hover:text-white cursor-pointer active:text-orange-700 inline mr-1 border rounded-md' >Ukash</li>
                            <span className='absolute top-7 w-full left-0 bg-gray-500'>
                                asdfsdf
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;