import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
function MyApp({ Component, pageProps }) {
  const [myDatabase, setMyDatabase] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fechProducts = async () => {
      const fech = await fetch(`http://localhost:3000/api/products`)
      const products = await fech.json()
      setMyDatabase(products)
    }
    fechProducts()
  }, []);



  const addToCart = (id, quantity, color, size) => {
    let temp = cart;
    if (temp.length !== 0) {
      if (temp.find(x => x.id === id && x.color === color && x.size === size)) {
        temp.filter(x => {
          if (x.id === id) {
            return x.qty = x.qty + (quantity ? quantity : 1)
          }
        })
      } else {
        temp.push({
          id: id,
          qty: quantity ? quantity : 1,
          size: size,
          color: color
        })

      }
    } else {
      temp.push({
        id: id,
        qty: quantity ? quantity : 1,
        size: size,
        color: color

      })
    }
  }

  const removeItem = (id) => {
    let temp = cart;
    if (temp.length !== 0) {
      if (temp.find(x => x.id === id && x.color === color && x.size === size)) {
        temp = temp.filter(x => {
          if (x.id === id) {
            if (x.qty > 1) {
              return x.qty--
            } else {
              return
            }
          } else return x
        })
      }
    }

    setCart(temp)
  }

  const cleatCart = () => {
    setCart([])
  }



  return <>
    <Navbar myDatabase={myDatabase}></Navbar>
    <Component cart={cart} addToCart={addToCart} removeItem={removeItem} myDatabase={myDatabase} {...pageProps} />
    <Footer></Footer>
  </>
}

export default MyApp
