import React, { useEffect, useState } from "react";
import Category from "../../components/category/Category";
// import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import "./Home.scss";
import { useSelector } from "react-redux";
import items from "../../components/SliderData";
import DisplaySlider from "../../components/displaySlider/DisplaySlider";
import CategorySection from "../../components/categorysection/CategorySection";
import j from '../../assets/fv-tile-Bottomwear-Au2.jpg'
import s from '../../assets/fv-tile-casualshirts-Au2.jpg'
import t from '../../assets/fv-tile-Tshirts-Au2.jpg'
import sn from '../../assets/luis-felipe-lins-J2-wAQDckus-unsplash.jpg'


function Home() {

    const [topProducts, setTopProducts] = useState(null);

    const categories = useSelector((state) => state.categoryReducer.categories);

    console.log(categories,"home");

    async function fetchData() {

        const topProductsResponse = await axiosClient.get(
            "/products?filters[istoppick][$eq]=true&populate=image"
        );


        setTopProducts(topProductsResponse.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    const autoplayInterval = 4000;

    const topjeans = topProducts?.filter(product => product.attributes.cat === 'jean');
    // console.log(topjeans);
    const topshirt = topProducts?.filter(product => product.attributes.cat === 'shirt');
    const topTshirt = topProducts?.filter(product => product.attributes.cat === 'tshirt');
    const topShoe = topProducts?.filter(product => product.attributes.cat === 'shoe')
    // console.log(topShoe)
    const rev = true;
    const nrev = false;

    return (
        <div className="Home">
            <div className="sliderhome">
                <DisplaySlider items={items} autoplayInterval={autoplayInterval} />
            </div>

            <section className="collection">
                {/* <div className="info">
                    <h2 className="heading">Shop By Categories</h2>
                    <p className="subheading">
                        Shop from the best, of our Collection.
                    </p>
                 
                </div> */}
                <div className="catheading">
                    <h1>Shop By Categories </h1>
                    <span className="one"></span>
                    <span className="two"></span>
                </div>
                <div className="content">
                    {categories?.map((category) => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
            </section>

            <section className="sliderproduct">
                <div className="catheading">
                    <h1>Men Jeans Top picks </h1>
                    <span className="one"></span>
                    <span className="two"></span>
                </div>
                <CategorySection topProducts={topjeans} img={j} Switch={nrev} />
            </section>

            <section className="sliderproduct">

                <div className="catheading">
                    <h1>Men Shirt Top picks </h1>
                    <span className="one"></span>
                    <span className="two"></span>
                </div>
                <CategorySection topProducts={topshirt} img={s} Switch={rev} />
            </section>

            <section className="sliderproduct">

                <div className="catheading">
                    <h1>Men T-Shirt Top picks </h1>
                    <span className="one"></span>
                    <span className="two"></span>
                </div>
                <CategorySection topProducts={topTshirt} img={t} Switch={nrev} />
            </section>

            <section className="sliderproduct">

                <div className="catheading">
                    <h1>Men Sneakers Top picks </h1>
                    <span className="one"></span>
                    <span className="two"></span>
                </div>
                <CategorySection topProducts={topShoe} img={sn} Switch={rev} />
            </section>

            <section className="collectiontop">
                <div className="catheading">
                    <h1>Our Top picks </h1>
                    <span className="one"></span>
                    <span className="two"></span>
                </div>
                <div className="contenttop">
                    {topProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;