import Head from 'next/head';
import React from 'react';
const Tshirts = ({ res }) => {

    console.log(res);
    return (
        <div>
            <Head>
                <title>Tshirts</title>
            </Head>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            res.map(p => <div key={p.id} className="lg:w-1/4 md:w-1/2 p-4 w-full mb-0 md:mb-8">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-contain object-top w-full h-full block" src={p.image} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.saller}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{p.title.slice(0, 70)}...</h2>
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

export default Tshirts;


export async function getServerSideProps(context) {
    const data = await fetch('http://localhost:3000/api/products')
    const res = await data.json();
    return {
        props: { res }
    }
}
