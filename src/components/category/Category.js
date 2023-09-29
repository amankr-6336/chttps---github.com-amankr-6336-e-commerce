import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
import {BsArrowDownShort} from 'react-icons/bs'

function Category({ category }) {
    const navigate = useNavigate();

    return (
        <div
            className="Category"
            style={{backgroundImage: `url(${category.attributes.image.data.attributes.url})`}}
            onClick={() => navigate(`/category/${category.attributes.key}`)}
        >
            <div className="category-content center">
                 <div className="inner">
                 <h3 className="heading">{category.attributes.title}</h3>
                  <BsArrowDownShort className="icondown"/>
                 </div>

                 <p className="clickhere"> Explore More</p>
               
            </div>
        </div>
    );
}

export default Category;