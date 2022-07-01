import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image'
const Products = ({ res }) => {
    const { query } = useRouter()
    const router = useRouter()
    const dynamicCategory = []
    for (let i = 0; i < res.length; i++) {
        const element = res[i];
        if (element.category === query.product) {
            dynamicCategory.push(element)
        }
    }
    return (
        <div>
            <Head>
                <title>{query.product}</title>
            </Head>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            dynamicCategory.map(p => <div key={p.uid} className="lg:w-1/4 md:w-1/2 p-4 hover:shadow w-full mb-0 md:mb-8">
                                <a className=" relative h-48 rounded flex justify-center overflow-hidden">
                                    <Image alt="ecommerce" src={p.image} width="200" height="200" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.saller}</h3>
                                    <h2 className="text-gray-500 hover:text-blue-900 cursor-pointer " onClick={(e) => router.push(`/${p.category}/${p.uid}`)} >{p.title.slice(0, 70)}...</h2>
                                    <p className="mt-1">${p.price}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;


export async function getServerSideProps(context) {
    const data = await fetch('https://62bf1dcb2da60900b416be7b--code-shop.netlify.app//api/products')
    const res = await data.json();
    return {
        props: { res }
    }
}