import { React,} from 'react'
import './CategorySection.scss'


// import Product from '../product/Product';
// import { axiosClient } from "../../utils/axiosClient";

// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import ProductInSlider from '../productSlider/ProductInSlider';
import { useNavigate } from 'react-router-dom';
import ProductInSliderone from '../productSlider/ProductInSliderone';








function CategorySection({topProducts,img,Switch}) {

    const navigate=useNavigate();
    // const [topProducts, setTopProducts] = useState([]);
 

    // async function fetchData() {

    //     const topProductsResponse = await axiosClient.get(
    //         "/products?filters[istoppick][$eq]=true&populate=image"
    //     );


    //     setTopProducts(topProductsResponse.data.data);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);


    return (
        <div className="categorysection">
            <div className={Switch?'innercategorysections':'innercategorysection'}>
                <div className="productslidersection">
                    {/* <div className="leftslide" onClick={()=> handleScroll(-200)}>
                        <AiOutlineLeft />
                        <p>Slide</p>
                    </div>
                    <div className="rightslide" onClick={ ()=> handleScroll(200)}>
                        <AiOutlineRight />
                        <p>Slide</p>
                    </div>
                    <div className="timepass" ref={scrollContainerRef}>
                        {topProducts?.map((product) => (
                            <Product key={product?.id} product={product} />
                        ))}
                    </div> */}
                    {/* <ProductInSlider topProducts={topProducts}/> */}
                    <ProductInSliderone topProducts={topProducts}/>

                   



                </div>

                <div className="catimagesection" onClick={()=> navigate('/category')}>
                    <div className='catname'>
                        <h2> Men's Collection</h2>
                        <p>Jeans</p>
                        <button>Explore More</button>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CategorySection