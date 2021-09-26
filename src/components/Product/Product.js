import React from 'react';
import Rating from 'react-rating';
import "./Product.css"

//import font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPlaneDeparture} />
const Product = (props) => {

    //use distructuring
    const { name, cost, img, country, duration, star } = props.product;



    return (
        // place info shwon in a card
        <div className="single-info">
            <div>
                <img src={img} alt="" height="150px" width="265px" className="rounded m-3" />
                <h5>Name: {name.slice(0, 15)}</h5>
                <h6>Cost: {cost} Tk</h6>
                <p>Country: {country} </p>
                <p>Duration: {duration}</p>
                {
                    //use rating for dynamicaly
                    <Rating
                        readonly
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fa fa-star icon-color">
                    </Rating>
                }
                <br />
                {/* handle cart button */}
                <button onClick={() => props.handleCart(props.product)} className="btn">{element} Book Your Place</button>
            </div>
        </div>
    );
};

export default Product;