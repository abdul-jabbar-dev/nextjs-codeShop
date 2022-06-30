import Image from 'next/image';
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react';
import FlotingCarts from './NavbarComponents/FlotingCarts';
import { useRouter } from 'next/router'
const Navbar = ({ myDatabase,cart }) => {
    const [className, setClassName] = useState('hidden');
    const [dropDown, setDropDown] = useState(false);
    const [category, setCategory] = useState([]);
    const router = useRouter()
    const ref = useRef()

    const toggoleCart = () => {
        if (router.pathname !== '/checkout') {
            setClassName(className === 'hidden' ? 'block' : 'hidden')
        }
    }
    useEffect(() => {
        let temp = []
        for (const key in myDatabase) {
            temp.push(myDatabase[key].category)
        }
        setCategory(temp.filter((ca, i) => ca !== temp[i - 1]))
        router.pathname === '/checkout' && setClassName('hidden')
    }, [myDatabase, router.pathname]);


    return (
        <>
            <header className="text-gray-600 body-font sticky top-0 z-50 bg-white shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image width={50} height={30} src='/Assits/icon.png' alt='Code Shop logo'  ></Image>
                        <span className="ml-3 text-xl">Code Shop</span>
                    </a>
                    <nav className="  order-3 sm:order-1   md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'}><a className="mr-5 hover:text-gray-900"> HOME</a></Link>
                        <a onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="mr-5 relative  hover:text-gray-900 "><div className='flex cursor-pointer items-center gap-x-1'>
                            Category
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg></div>
                            {
                                dropDown ? <div className='absolute bg-white p-5 top-auto left-0  rounded-md'>
                                    <ul>
                                        {category.map(item => <li onClick={e => router.push(`/${item}`)} key={item} className="py-1 uppercase text-gray-600 hover:text-gray-900 cursor-pointer  px-2">{item}</li>)}
                                    </ul>
                                </div> : ''
                            }</a>

                        <Link href={'/t-shirt'}><a className="mr-5 hover:text-gray-900"> T-SHIRT</a></Link>
                        <Link href={'/hodees'}><a className="mr-5 hover:text-gray-900"> HODEES</a></Link>
                        <Link href={'/books'}><a className="mr-5 hover:text-gray-900"> BOOKS</a></Link>
                    </nav>
                    <div className="order-2   flex mb-4 md:mb-0">
                        <div>
                            <button onClick={toggoleCart} className="mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>
                            <div ref={ref} className={className}>
                                <FlotingCarts toggoleCart={toggoleCart} cart={cart} myDatabase={myDatabase} ></FlotingCarts>
                            </div>
                        </div>

                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  ">Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;