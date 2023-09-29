import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductInSliderone.css"
// import items from '../SliderData'
// import { useSelector } from "react-redux";


function ProductInSliderone({topProducts}) {

  const navigate = useNavigate();
  // const [state,setState]=useState([]);
  // setState(categories);

  
  

 

  const settings = {
    infinite: true,
    // vertical:true,
    slidesToShow:  3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]

};
 useEffect(()=>{

 },[topProducts])

//  console.log(topProducts,"from productin slider")

  return (
    <div className="imgslider" >
      <Slider {...settings}>
        {topProducts?.map((product) => ( 
          <div className='k'  key={product.id} onClick={() => navigate(`/products/${product?.attributes.key}`)}>
            <img  className='kk' src={product?.attributes.image?.data[0].attributes.url} alt='' />
            <p>{product.attributes.title}</p>
            <p className='pr'>₹ {product?.attributes.price}</p>
          </div>
        ))}
      </Slider>
    </div>

  )
}

export default ProductInSliderone

