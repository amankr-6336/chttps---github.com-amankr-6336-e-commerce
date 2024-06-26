import React from "react";
import { useNavigate } from "react-router";
// import dummyImg from '../../assets/naruto.jpeg'
import './Product.scss'

function Product({product}) {
    const navigate = useNavigate();

    // console.log('product', product);

    return (
        <div className="Product" onClick={() => navigate(`/products/${product?.attributes.key}`)}>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img src={product?.attributes.image?.data[0].attributes.url} alt={product?.attributes.title} id="img"/>
                    </div>
                </div>
                <div className="product-info">
                    <p className="title">
                        {product?.attributes.title}
                    </p>
                    <p className="price">₹ {product?.attributes.price}</p>
                    <button className="buynow">BUY NOW</button>
                </div>
                
            </div>
        </div>
    );
}

export default Product;