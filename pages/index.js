import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Code shop</title>
        <meta name="description" content="codeshop.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Image src="/Assits/bannarColor.png" width={3500} height={1200} />
      <br />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img alt="gallery" className="w-full object-contain h-full object-top block opacity-25 absolute inset-0" src="https://m.media-amazon.com/images/I/510BkE5LGBL._AC_UL320_.jpg" />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">T-SHIRTS</h2>
                <p className="leading-relaxed">Visit our new collection and customize your own design.</p>
                <Link href="/tshirts">
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" className="w-full object-contain h-full object-top block opacity-25 absolute inset-0" src="https://m.media-amazon.com/images/I/51wskW74VmL._AC_UL320_.jpg" />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">PROGRAMMING MUGS</h2>
                    <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                    <Link href="/mugs">
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" className="w-full object-contain h-full object-top block opacity-25 absolute inset-0" src="https://m.media-amazon.com/images/I/510MNTLndwL.jpg" />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">LEARN TECHNOLOGY</h2>
                    <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                    <Link href="/books">
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>    <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img className="w-full h-[16rem] object-top object-contain inset-0" src="https://m.media-amazon.com/images/I/51USY6zamcL._AC_UL320_.jpg" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
