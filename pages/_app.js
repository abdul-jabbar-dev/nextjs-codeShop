import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import LocalStorage from '../utility/LocalStorage'
function MyApp({ Component, pageProps }) {
  const [myDatabase, setMyDatabase] = useState([])
  const [cart, setCart] = useState([]);
  // const [cart, setCart] = useState([]);
  useEffect(() => {
    const fechProducts = async () => {
      const fech = await fetch(`https://62bf1dcb2da60900b416be7b--code-shop.netlify.app//api/products`)
      const products = await fech.json()
      setMyDatabase(products)
    }
    fechProducts()
  }, []);



  const addToCart = (product) => {
    console.log(product)
    let tempItem = { ...product }
    if (cart.find(item => item.uid === tempItem.uid)) {
      if (tempItem.color === 'Default' || cart.find(item => item.color === tempItem.color)) {
        if (tempItem.size === 'Default' || cart.find(item => item.size === tempItem.size)) {
          let temp = cart
          for (const key of temp) {
            key.qty = key.qty + tempItem.qty
          }
          setCart(temp)
        } else {
          setCart([tempItem, ...cart])
        }
      } else {
        setCart([tempItem, ...cart])
      }
    } else {
      setCart([tempItem, ...cart])
    }
  }

  return <>
    <Navbar cart={cart} myDatabase={myDatabase}></Navbar>
    <Component cart={cart} addToCart={addToCart} myDatabase={myDatabase} {...pageProps} />
    <Footer></Footer>
  </>
}

export default MyApp
