import { React, useState, useEffect } from 'react'
import './ProductSlider.scss'
// import sn4 from '../../assets/sn4.webp'

function ProductSlider({ items, autoPlay = true, autoPlayInterval = 3000 }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function goToNext() {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  // console.log(items)

  useEffect(() => {
    let intervalId;

    if (autoPlay) {
      intervalId = setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoPlay, autoPlayInterval, goToNext]);
  //  console.log(items)

  return (
    <div className="maincontainerslider">

      <div className="sidedisplay">
        {
          items.map((item, index) => (
            <div className={currentIndex===index? 'innersidedisplays':'innersidedisplay'} key={index} onClick={()=> setCurrentIndex(index)} >
              <img src={item.attributes.url} alt="" />
            </div>
          ))
        }



        {/* <div className="innersidedisplay">
          <img src={sn4} alt="" />
        </div> */}

      </div>


      <div className="innermaincontainerslider">

        {/* <div className="leftb">
          <button onClick={goToPrevious}>left</button>
        </div> */}


        <div className="imagesectionslider">
          <img className='slideronee' src={items[currentIndex].attributes.url} alt="" />
        </div>

        {/* <div className="rightb">
          <button onClick={goToNext}>right</button>
        </div> */}

        <div className="dots">

          {
            items.map((_, index) => (
              <span key={index}  className={index === currentIndex ? 'activedot' : 'span'}></span>
            ))
          }

        </div>


      </div>
    </div>
  )
}

export default ProductSlider