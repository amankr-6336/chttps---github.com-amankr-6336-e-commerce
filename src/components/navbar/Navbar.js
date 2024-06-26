import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
    const [openCart, setOpenCart] = useState(false);
    const cart = useSelector(state => state.cartReducer.cart);

    const categories = useSelector((state) => state.categoryReducer.categories);

    let totalItems = 0;
    cart.forEach(item => totalItems += item.quantity);


    return (
        <>
            <nav className="Navbar">
                <div className="container nav-container">
                    <div className="nav-left">
                        <ul className="link-group">
                            {categories?.map((category) => (
                                <li className="hover-link" key={category.id}>
                                    <Link
                                        className="link"
                                        to={`/category/${category.attributes.key}`}
                                    >
                                        {category.attributes.title}
                                    </Link>
                                    <span></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-center">

                        <div className="catheading">
                            <Link to="/">
                                <h1 className="banner">Trendy Threads</h1>
                            </Link>
                            <span className="one"></span>
                            <span className="two"></span>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div
                            className="nav-cart hover-link"
                            onClick={() => setOpenCart(!openCart)}
                        >
                            <BsCart2 className="icon" />
                            {totalItems > 0 && <span className="cart-count center">{totalItems}</span>}
                        </div>
                    </div>
                </div>
            </nav>
            {openCart && <Cart onClose={() => setOpenCart(false)} />}
        </>
    );
}

export default Navbar;