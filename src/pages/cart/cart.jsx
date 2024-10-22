import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()

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
        <button> Checkout </button>
    </div>
    ) : (
        <h1>Tu Carrito está vacio</h1>
    )}
    </div>
    );
};