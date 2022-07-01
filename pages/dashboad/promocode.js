import React, { useEffect, useState } from 'react';

const Promocode = () => {
    const [promoCodes, setPromoCodes] = useState([]);
    const [newPromo, setNewPromo] = useState({
        code: '',
        discount: '',
        createDate: '',
        expireDate: '',
        provider: '',
    });
    const setPromoCode = () => {
        if (newPromo.code?.length > 0 && newPromo.discount?.length > 0 && newPromo.expireDate?.length > 0 && newPromo.provider?.length > 0) {
            setNewPromo(newPromo.createDate = new Date().toDateString())
            fetch(`https://62bf1dcb2da60900b416be7b--code-shop.netlify.app//api/promocode`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPromo)
            }).then(response => {
                if (response.status === 200) {
                    document.getElementById('code').value = ''
                    document.getElementById('discount').value = ''
                    document.getElementById('expireDate').value = ''
                    document.getElementById('provider').value = ''
                    setNewPromo({
                        code: '',
                        discount: '',
                        createDate: '',
                        expireDate: '',
                        provider: '',
                    })
                }
            })
                .catch(err => console.log(err))
        } else {

        }
    }

    useEffect(() => {
        const getPromoCode = async () => {
            const res = await fetch(`https://62bf1dcb2da60900b416be7b--code-shop.netlify.app//api/promocode`)
            const code = await res.json();
            setPromoCodes(code)
        }
        getPromoCode()
    }, [])
    return (
        <div>

            <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold">Products Oder</h2>
                        <span className="text-xs">All products item</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="lg:ml-40 ml-10 space-x-8">
                            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Code
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Discount
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Created at
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Expire at
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            products
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input onChange={e => setNewPromo({ ...newPromo, [e.target.name]: (e.target.value).toUpperCase() })} name='code' placeholder='Promo code' className='border w-full px-3 uppercase py-1 rounded-md bg-gray-100' type="text" id='code' />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input onChange={e => setNewPromo({ ...newPromo, [e.target.name]: e.target.value })} type="text" placeholder='Discount %' className='border w-full px-3 py-1 rounded-md bg-gray-100' name="discount" id="discount" />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-500 whitespace-no-wrap ">
                                                New
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input onChange={e => setNewPromo({ ...newPromo, [e.target.name]: (new Date(e.target.value).toDateString()) })} type="date" min={new Date().toISOString().split('T')[0]} className='border w-full px-3 py-1 rounded-md bg-gray-100' required name="expireDate" id="expireDate" />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <input onChange={e => setNewPromo({ ...newPromo, [e.target.name]: e.target.value })} type="text" placeholder='Promocode Provider' className='border w-full px-3 py-1 rounded-md bg-gray-100 ' required name="provider" id="provider" />
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span onClick={setPromoCode} className="relative  cursor-pointer inline-block px-3 bg-indigo-600 hover:bg-indigo-800  rounded-full py-1 font-semibold text-white leading-tight">
                                               <div className="flex items-center">
                                                    Add <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                    </svg>
                                               </div>
                                            </span>
                                        </td>
                                    </tr>
                                    {
                                        promoCodes?.map(function (code, i) {
                                            return <tr key={i}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="">

                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {code.code}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{code.discount}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Jan 21, 2020
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {code.expireDate}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Admin
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    {
                                                        (new Date(code.expireDate).getTime() > new Date().getTime()) ?
                                                            <span
                                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                <span className="relative">Active</span>
                                                            </span> : <span
                                                                className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                                <span className="relative">Expire</span>
                                                            </span>
                                                    }
                                                </td>
                                            </tr>
                                        })
                                    }



                                </tbody>
                            </table>
                            <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    &nbsp; &nbsp;
                                    <button
                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promocode;