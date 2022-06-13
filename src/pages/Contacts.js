import React from "react";

import classes from "./Contacts.module.scss";
import Iconsvg from './../components/Iconsvg.tsx';

const Contacts = () => {
  return (
    <div className={classes.main__container}>
      <div className={classes.container}>
        <h1>Наши контакты</h1>
        <div className={classes.location}>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.3620006315555!2d39.25562130204296!3d51.6715165607093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b2fbc35c0a521%3A0xe438ac6916d6f42f!2z0YPQuy4g0JTQuNC80LjRgtGA0L7QstCwLCA3Nywg0JLQvtGA0L7QvdC10LYsINCS0L7RgNC-0L3QtdC20YHQutCw0Y8g0L7QsdC7LiwgMzk0MDQy!5e0!3m2!1sru!2sru!4v1655066754981!5m2!1sru!2sru"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={classes.contacts}>
          <div className={classes.contacts__item}>
            <h3>Наши телефоны</h3>
             <p><Iconsvg id="phone" />8 (951) 551-35-12</p>
            <p><Iconsvg id="phone" />8 (952) 542-42-28</p>
            <p><Iconsvg id="phone" />8 (961) 531-23-65</p>
          </div>
          <div className={classes.contacts__item}>
            <h3>Наши почты</h3>
            <p><Iconsvg id="mail" />kirill540945@gmail.com</p>
            <p><Iconsvg id="mail" />79515513512@yandex.ru</p>
          </div>
          <div className={classes.contacts__item}>
            <h3>Наш адрес</h3>
            <p><Iconsvg id="address" />ул.Димитрова 77</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
