'use client'
import React, { useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems}= useContext(ShopContext);
    const [collapsed, setCollapsed] = useState(false)
    
    const cartItemAmount = cartItems[id];

//Project add sizes

   /* return( <div className="product">
        <Link to={`/${id}`}><img className='logo' src={productImage}/></Link>
        <div className="description">
            <p>

                <b>{productName}</b>
            </p>
            <p> ${price}</p>
        </div>
        <div className="addToCartBttn" onClick={() => setCollapsed(!collapsed)}>Añadir al carrito</div>
        <div className="BttnCollapse">{collapsed && <div>
                                                        <p>S</p>
                                                        <p>M</p>
                                                        <p>L</p>
                                                        <p>XL</p>
                                                        <p>2XL</p>
                                                        <p>3XL</p>
                                                        <p>4XL</p>
                                                        <p>5XL</p>
                                                    </div>}
        </div>
    </div>
    );
};*/

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Añadir al carrito {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};