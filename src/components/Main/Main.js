import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Main.css"
const Main = () => {

    // useState
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])

    //useEffect for loading json file
    useEffect(() => {
        const url = `gta.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)

            })

    }, [])

    //cart handle 
    const handleCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart)

    }



    return (
        //all place information show in main
        <div className="product-container">
            <div className="product-field">
                {
                    products.map(product =>
                        <Product
                            key={product.key}
                            product={product}
                            handleCart={handleCart}
                        ></Product>)
                }
            </div>

            {/* cart show */}
            <div className="cart-field">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>

    );
};

export default Main;