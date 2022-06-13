import React, { useContext } from "react";
import classes from "./Page.module.scss";
import { CarouselContext } from "../slider-context";

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext);

  return <div 
  className={classes.main__container}
  style={{
    minWidth: `${width}px`,
    maxWidth: `${width}px`
  }}
  >{children}</div>;
};
