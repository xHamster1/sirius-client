import React from "react";

import classes from "./Footer.module.scss";
import Iconsvg from "./Iconsvg.tsx";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__container__row}>
          {/* Adress */}
          <div className={classes.footer__container__col}>
            <ul>
              <li>8 (951) 551-35-12</li>
              <li>Воронеж, Россия</li>
              <li>ул.Димитрова 77</li>
            </ul>
          </div>

          {/* Social */}
          <div className={classes.footer__container__col}>
            <h3>Наши социальные сети:</h3>
            <div className={classes.footer__container__social}>
              <a href="https://vk.com/hamster_07" target="_blank" rel="noreferrer"><Iconsvg id="vk" /></a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer"><Iconsvg id="telegram" /></a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer"><Iconsvg id="discord" /></a>
            </div>
          </div>

          {/* Links */}
          <div className={classes.footer__container__col}>
            <ul>
              <li>
                <Link to="/" onClick={scrollToTop}>Главная</Link>
              </li>
              <li>
                <Link to="/rent" onClick={scrollToTop}>Аренда</Link>
              </li>
              <li>
                <Link to="/contacts" onClick={scrollToTop}>Контакты</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>О нас</Link>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy;{new Date().getFullYear()} | Все права защищены</p>
      </div>
    </div>
  );
};

export default Footer;
