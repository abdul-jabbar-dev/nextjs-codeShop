import React, { useState, useEffect } from 'react';

const Checkout = () => {
    const [promoCodeValue, setPromoCodeValue] = useState('')
    const [promoCodeMssg, setPromoCodeMssg] = useState('')
    const promoCodeAlert = () => {
        if (promoCodeMssg == 'This code is valid') {
            return 'text-green-400 text-sm'
        } else if (promoCodeMssg == 'This code is expire' || promoCodeMssg == 'This code is not exists') {
            return 'text-red-400 text-sm'
        }
    }
    const [promoCodes, setPromoCodes] = useState([])
    const products = [{
        image: 'https://m.media-amazon.com/images/I/71Jq0eYkSSL._AC_UL320_.jpg',
        id: '15486554',
        name: 'Web Developer black tshirt',
        price: '500',
        quantity: 1,
        color: 'red',

    }, {
        image: 'https://m.media-amazon.com/images/I/41a13Fx7RYL._AC_UL320_.jpg',
        id: '15456754',
        name: '404 Not found white tshirt',
        price: '300',
        quantity: 3,
        color: 'white',

    }, {
        image: 'https://m.media-amazon.com/images/I/41-NkTdGHQL._AC_UY218_.jpg',
        id: '15786573',
        name: "Forth Programmer's HandBook",
        price: '1500',
        quantity: 1,
        color: 'default',

    },]
    const promoCheck = () => {
        setPromoCodeMssg('')
        const match = promoCodes.find(c => c.code === promoCodeValue)

        if (match) {
            if (new Date(match.expireDate).getTime() > new Date().getTime()) {
                setPromoCodeMssg('This code is valid')
            } else {
                setPromoCodeMssg('This code is expire')
            }
        } else {
            setPromoCodeMssg('This code is not exists')
        }

    }
    useEffect(() => {
        const getPromoCode = async () => {
            const fetchData = await fetch('http://localhost:3000/api/promocode')
            const data = await fetchData.json()
            setPromoCodes(data)
        }
        getPromoCode()
            .catch((e) => console.error(e))
    }, []);



    return (
        <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col lg:space-x-12 space-x-0 px-6 sm:px-0">
                <div className='lg:w-1/2 w-full'>
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
                    <div className="">
                        <h2 className='text-center mt-6 '>Payment Methods</h2>
                        <h1 className='text-sm text-slate-600'>Online Banking</h1>

                        <div className="flex">
                            <div className='mr-6 space-x-2'>
                                <label htmlFor="cod">Cash on delivery</label>
                                <input type='radio' name="onlineBank" id="cod" />
                            </div>
                            <div className='mr-6 space-x-2'>
                                <label htmlFor="bkash">Bkash</label>
                                <input type='radio' name="onlineBank" id="bkash" />
                            </div>

                            <div className='mr-6 space-x-2'>
                                <label htmlFor="rocket">Rocket</label>
                                <input type='radio' name="onlineBank" id="rocket" />
                            </div>
                            <div className='mr-6 space-x-2'>
                                <label htmlFor="rocket">U-Cash</label>
                                <input type='radio' name="onlineBank" id="ucash" />
                            </div>
                            <div className='mr-6 space-x-2'>
                                <label htmlFor="rocket">Card</label>
                                <input type='radio' name="onlineBank" id="card" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <h2 className='text-center mt-6 '>Product shipping</h2>
                    <h1 className='text-sm text-slate-600'>Product Details</h1>
                    <div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full md:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full" >
                                            <thead className="border-b">
                                                <tr>
                                                    <th style={{ width: '65%', }} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Name
                                                    </th>
                                                    <th style={{ width: '25%', }} scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4 ">
                                                        Qty
                                                    </th>
                                                    <th style={{ width: '10%', }} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Price
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody border={1}>
                                                {
                                                    products.map((product, key) => <tr key={key} className="border-b">
                                                        <td className="text-sm flex items-start space-x-4 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <img className="w-16 h-16 object-contain" src={product.image} alt={product.name} />
                                                            <div>
                                                                <h4 className='font-semibold'>{product.name}</h4>
                                                                <p className='text-xs text-gray-400 font-semibold'> Color family: {product.color}, No brand</p>
                                                            </div>
                                                        </td>
                                                        <td className="text-center text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                            <input defaultValue={product.quantity} className="w-2/3 border min-w-full h-8 text-center rounded-sm" type="number" name="" id="" />
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                            {product.price}<span className='font-bold text-xl' >৳</span>
                                                        </td>
                                                    </tr>)
                                                }

                                            </tbody>
                                            <tfoot>
                                                <tr >
                                                    <td className="mt-4 pr-4 pt-4">
                                                        <input onChange={e => setPromoCodeValue(e.target.value)} className="btn border w-full py-1" />
                                                    </td>
                                                    <td className="mt-4 pr-4 pt-4">
                                                        <button onClick={promoCheck} className="btn w-full bg-orange-700 text-white py-1">APPLY</button>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p className={promoCodeAlert()}>{promoCodeMssg}</p></td>
                                                    <td></td>
                                                    <td className="text-right">
                                                        { }
                                                        <span className='font-bold text-xl' >৳</span>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;