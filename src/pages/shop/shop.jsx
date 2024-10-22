import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1> Machi! Tees</h1>
                <h2>PREVENTA ABIERTA HASTA EL 17/11!</h2>
            </div>
            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}