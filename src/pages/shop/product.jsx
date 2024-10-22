import React from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems}= useContext(ShopContext);
    console.log(props)
const cartItemAmount = cartItems[id];

    return( <div className="product">
        <Link to={`/${id}`}><img className='logo' src={productImage}/></Link>
        <div className="description">
            <p>

                <b>{productName}</b>
            </p>
            <p> ${price}</p>
        </div>
        <button className="addToCartBttn" onClick={()=> addToCart(id)}>Añadir al carrito{cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
    </div>
    );
};