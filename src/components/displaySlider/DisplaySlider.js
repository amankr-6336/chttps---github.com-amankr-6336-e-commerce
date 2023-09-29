import React, { useState, useEffect } from 'react'
import './DisplaySlider.scss'
// import p from '../../assets/banner.jpg'



function DisplaySlider({ items ,autoplayInterval}) {
  // console.log(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  // function goToPrevious() {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // function goToNext() {
  //   const isLastSlide = currentIndex === items.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // }

  function taketothat(index){
        setCurrentIndex(index)
  }

  
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next image
      const nextIndex =
        currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }, autoplayInterval);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, [currentIndex, items, autoplayInterval]);


  return (
    <div className="maincontainersliderp">
      <div className="innermaincontainerslider">

        {/* <div className="leftb">
          <button onClick={goToPrevious}>left</button>
        </div>

        <div className="rightb">
          <button onClick={goToNext}>right</button>
        </div> */}

        {
          items.map((item, index) => {
            return (
              <div className={index === currentIndex ? 'slide active' : 'slide'}
                key={index}
              >
                {
                  index === currentIndex && (
                    <img src={item.url} alt="" className='image' />
                  )
                }
              </div>
            )
          })
        }




        <div className="dots">

                  {
                    items.map((_,index) => (
                      <span  key={index} onClick={()=>taketothat(index)} className={index===currentIndex ? 'activedot':'span'} ></span>
                    ))
                  }

              </div>


      </div>
    </div>
  );
}

export default DisplaySlider