import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    console.log(window.open)
    const navigate = useNavigate()
    const handleRedirect = () => {
        window.open('https://wa.me/5493413729562?text=%C2%A1Hola%21%20Te%20hablaba%20para%20consultarte%20sobre%20...', "_blank" );
      };
    return(
         <div className="cart"> <div> <h1> Tu Carrito </h1>
    </div>
    <div className="cartItems">
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0){
                return <CartItem data={product}/>
            }
        }
        )}
    </div>
    {totalAmount > 0 ? (
    <div className="checkout">
        <p> Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continuar Comprando </button>
        <button onClick={handleRedirect}> Checkout </button>
    </div>
    ) : (
        <h1>Tu Carrito está vacio</h1>
    )}
    </div>
    );
};