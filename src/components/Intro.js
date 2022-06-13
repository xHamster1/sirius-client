import React from 'react';

import classes from "./../components/Intro.module.scss";

const Intro = () => {
  return (
    <>
        <div className={classes.intro}>
          <div className={classes.intro__light}>
            <div className={classes.intro__light__dark}></div>
          </div>
          <div className={classes.intro__content}>
            <h2>Сириус</h2>
            <p>У вас есть бизнес, у нас помещение для его реализации.</p>
          </div>
        </div>
    </>
  )
}

export default Intro;