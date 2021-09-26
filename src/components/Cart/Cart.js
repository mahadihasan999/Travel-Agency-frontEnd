import React from 'react';

import "./Cart.css"
const Cart = (props) => {

    const { cart } = props;
    let totalQuantity = 0, totalCost = 0, spot, offer;

    //use for loop 
    for (const place of cart) {
        if (!place.quantity) {
            place.quantity = 1;
        }
        //calculate total quantity and total cost
        totalCost = totalCost + place.cost * place.quantity;
        totalQuantity = totalQuantity + place.quantity;

        spot = 'Added Spots: '
        offer = 'Spcial Package  Deals!'
    }


    return (
        <div className="cart">
            <p className="offer">{offer}</p>
            {/* card summery */}
            <h5>Summery </h5>
            <p>Total Book place: {totalQuantity}</p>
            <p className="total-cost">Total tour Cost: {totalCost} Tk</p>


            <hr />
            <h5>{spot}</h5>
            <div >
                <ul>
                    {/* use map and li for show single name in a cart */}
                    {cart.map((data) => (
                        <li>
                            <p className="detail">
                                <img src={data.img} alt="" height="20px" width="20px" className="rounded" /> {data.name}
                            </p>
                        </li>

                    ))
                    }
                </ul>

            </div>
            <button className="btn"> Buy Now</button>
        </div>
    );
};

export default Cart;