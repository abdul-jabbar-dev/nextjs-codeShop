import React, { useState } from 'react';



const LocalStorage = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
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
console.log(cart)
    return { addToCart,cart };
};

export default LocalStorage;