import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import dummyImg from "../../assets/naruto.jpeg";
import { axiosClient } from "../../utils/axiosClient";
import "./ProductDetails.scss";
import Loader from "../../components/loader/Loader";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
// import DisplaySlider from '../../components/displaySlider/DisplaySlider'
import ProductSlider from "./ProductSlider";
// import sn4 from '../../assets/sn4.webp'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsCashCoin } from 'react-icons/bs'
import { CgArrowsExchange } from 'react-icons/cg'





function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cartReducer.cart);
    const quantity = cart.find(item => item.key === params.productId)?.quantity || 0;

    async function fetchData() {
        const productResponse = await axiosClient.get(
            `/products?filters[key][$eq]=${params.productId}&populate=*`
        );
        // console.log("product", productResponse);
        if (productResponse.data.data.length > 0) {
            setProduct(productResponse.data.data[0]);
        }
    }

   



    useEffect(() => {
        setProduct(null);
        fetchData();
        
    }, [ params]);

    if (!product) {
        return <Loader />;
    }

    return (
        <div className="ProductDetail">
            <div className="containerss">
                <div className="product-layout">
                    <div className="product-img">
                        {/* <div className="sidedisplay">
                          
                           <div className="innersidedisplay">
                                <img src={sn4} alt="" />
                                </div>
                            
                         </div> */}
                        <ProductSlider items={product?.attributes.image.data} />

                        {/* <img
                            src={product?.attributes.image.data.attributes.url}
                            alt="product img"
                        /> */}


                    </div>
                    <div className="product-info">
                        <h1 className="heading">{product?.attributes.title}</h1>
                        <span className="divide"></span>
                        <p className="descriptions">
                            {product?.attributes.desc}
                        </p>
                        <h3 className="price">₹ {product?.attributes.price}</h3>
                        <div className="cart-options">
                            <div className="quantity-selector">
                                <span className="btn decrement" onClick={() => dispatch(removeFromCart(product))}>-</span>
                                <span className="quantity">{quantity}</span>
                                <span className="btn increment" onClick={() => dispatch(addToCart(product))}>+</span>
                            </div>
                            <button className="btn-primary add-to-cart" onClick={() => dispatch(addToCart(product))}>
                                Add to Cart
                            </button>
                        </div>

                        <div className="return-policy">
                            <ul>
                                <li>
                                    <div className="delivery">
                                        <TbTruckDelivery className="d" />
                                        <h3>Get it in 10-12 days. </h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="delivery">
                                        <BsCashCoin className="d" />
                                        <h3>Pay on delivery not available. </h3>
                                    </div>
                                </li>

                                <li>
                                    <div className="delivery">
                                        <CgArrowsExchange className="d" />
                                        <h3>Easy 14 days return & exchange available </h3>
                                    </div>
                                </li>

                                <li>
                                    100% Original Product
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;