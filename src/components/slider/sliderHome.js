import React, { useEffect, useState, Children, cloneElement, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {Page} from './Page/Page'
import { CarouselContext } from "./slider-context";

import classes from "./sliderHome.module.scss";

export const Carousel = ({ children }) => {
  const [slide, setSlide] = useState([]);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(450)

  const windowElRef = useRef()

  useEffect(() => {
    const resizeHandler = () => {
        const windowElWidth  = windowElRef.current.clientWidth
        setWidth(windowElWidth)
        setOffset(0)
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
        window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;

      const maxOffset = -(width * (slide.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setSlide(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
          },
        });
      })
    );
  }, []);

  return (
      <CarouselContext.Provider value={{width}}>
    <div className={classes.container}>
      
      <div className={classes.window} ref={windowElRef}>
          <FaChevronLeft
        className={classes.arrow__left}
        onClick={handleLeftArrowClick}
      />
        <div
          className={classes.container__items}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {slide}
        </div>
        <FaChevronRight
        className={classes.arrow__right}
        onClick={handleRightArrowClick}
      />
      </div>
      
    </div>
    </CarouselContext.Provider>
  );
};


Carousel.Page = Page