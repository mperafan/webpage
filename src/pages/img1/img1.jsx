import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import './img1.css';
import ImageGallery from "react-image-gallery";
import tabla from "../img1/miripelada2.webp"
import "react-image-gallery/styles/css/image-gallery.css"

export const Img1 = () => {
    const {id} = useParams();
    const {id2, productName, price, productImage} = PRODUCTS[id-1];
    const images= [
        {
            original: productImage,
            thumbnail: productImage,
            thumbnailHeight: "auto",
            thumbnailWidth:"20%",
        },
        {
         original: tabla,
         thumbnail: tabla,
            thumbnailHeight: "auto",
            thumbnailWidth:"20%",
        },
    ]
    
    return (
        <div>
        <div className="title">Remera "{productName}"</div>
        <ImageGallery items={images}/>
        <div><p className="description">Remera de spum premium con estampa DTF. Una vez terminada la preventa tienen entre 3 y 4 semanas en el taller.</p></div>
        </div>
    )
}