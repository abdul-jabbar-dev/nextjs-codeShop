import React from 'react';
import { useRouter } from 'next/router'
const FlotingCarts = ({ toggoleCart }) => {
    const router = useRouter()
    return (
        <div>
            <aside className="absolute bg-gray-100 min-w-max shadow-xl right-3 rounded-md">
                <div className="p-6 text-black">
                    <div className="flex justify-end">
                        <h1 className="inline flex-1 text-center mb-5">SHOPPING CART</h1>
                        <svg onClick={toggoleCart} xmlns="http://www.w3.org/2000/svg" className=" hover:text-amber-800  cursor-pointer inline ml-auto h-6 w-6 font-extralight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                    <div className="bg-white px-2 py-6 rounded-md">
                        <div className="">
                            <table className="table-auto">
                                <thead >
                                    <tr className="text-xs  bg-slate-100  " >

                                        <td className='py-2'>ITEMS</td>
                                        <td className='py-2'>PRICE</td>
                                        <td className='py-2'>QUANTITY</td>
                                        <td className='py-2'>TOTAL</td>
                                        <td className='py-2'>REMOVE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-y-8 border-transparent">
                                        <td className='flex items-center'>
                                            <img className='w-8 mr-1' src="https://m.media-amazon.com/images/I/61cZNKcDs9L._AC_UL320_.jpg" alt="" />
                                            <div>
                                                The 400 Blows
                                                <p className='text-xs'>Black i wear glasses so can c#</p>
                                            </div>
                                        </td>
                                        <td className='mr-4 text-center'>$18.40</td>
                                        <td className='text-center'><input className='w-16 m-1 text-center' defaultValue={1} type="number" name="" id="" /></td>
                                        <td className=' text-center'>$18.40</td>
                                        <td className=' text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-4 w-4 hover:rounded-xl hover:bg-slate-700 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="border-r-8 border-transparent">
                                        <td className='flex items-center'>
                                            <img className='w-8 mr-1' src="https://m.media-amazon.com/images/I/61cZNKcDs9L._AC_UL320_.jpg" alt="" />
                                            <div>
                                                The 400 Blows
                                                <p className='text-xs'>Black i wear glasses so can c#</p>
                                            </div>
                                        </td>
                                        <td className='mr-4 text-center'>$18.40</td>
                                        <td className='text-center'><input className='w-16 m-1 text-center' defaultValue={1} type="number" name="" id="" /></td>
                                        <td className=' text-center'>$18.40</td>
                                        <td className=' text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-4 w-4 hover:rounded-xl hover:bg-slate-700 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            < button onClick={()=>router.push('/checkout')} className='btn bg-gray-600 hover:bg-gray-900 mt-3 py-2 px-3 rounded-md text-white text-xs'>CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default FlotingCarts;