import React from "react";
import { Carousel } from "../components/slider/sliderHome";
import Intro from "../components/Intro";

import classes from "./Home.module.scss";
import Iconsvg from "../components/Iconsvg.tsx";

const Home = () => {
  return (
    <>
      <Intro />
      <div className={classes.main__container}>
        <div className={classes.container}>
          <Carousel className={classes.slider}>
            <Carousel.Page>
              <div className={classes.slider__item__one}>
                <h1>Мы - компания "Сириус"</h1>
              </div>
            </Carousel.Page>
            <Carousel.Page>
              <div className={classes.slider__item__two}>
                <h1>Подбираем лучшие помещения для вас</h1>
              </div>
            </Carousel.Page>
            <Carousel.Page>
              <div className={classes.slider__item__three}>
                <h1>Не думайте об офисе, думайте о прибыли</h1>
              </div>
            </Carousel.Page>
          </Carousel>
        </div>
        <div className={classes.container}>
          <div className={classes.reson}>
            <h2>Почему именнно мы:</h2>
            <div className={classes.reson__item}>
              <div className={classes.reson__item__content}>
                <Iconsvg
                  id="resone"
                  className={classes.reson__item__content__svg}
                />
                <h4>Надёжность</h4>
                <p>
                  Наша компания работает только с проверенными арендодателями и
                  предоставляет самые лучшие варианты в городе.
                </p>
              </div>
              <div className={classes.reson__item__content}>
                <Iconsvg
                  id="resone"
                  className={classes.reson__item__content__svg}
                />
                <h4>Выгода</h4>
                <p>
                  Вы получаете современное помещение по самой низкой цене и без
                  лишней бумажной волокиты, что так важно в начале бизнеса
                </p>
              </div>
              <div className={classes.reson__item__content}>
                <Iconsvg
                  id="resone"
                  className={classes.reson__item__content__svg}
                />
                <h4>Современность</h4>
                <p>
                  В нашей компании давно наступил XXI век: удалённый показ,
                  связь через мессенджеры, всё это именно про нас
                </p>
              </div>
              <div className={classes.reson__item__content}>
                <Iconsvg
                  id="resone"
                  className={classes.reson__item__content__svg}
                />
                <h4>Отзывчивость</h4>
                <p>
                  Наши сотрудники проработают все ваши пожелания и потребности,
                  и найдут именно то помещение, которое устроит вас
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.group}>
            <div className={classes.group__mask}>
              <h1>Наши руководители</h1>
            </div>
          </div>
          <div className={classes.group__container}>
            <div className={classes.group__container__card}>
              <div className={classes.group__container__card__photodir}></div>
              <h3>Бородкин Данил Сергеевич</h3>
              <h7>Директор</h7>
              <p>Основатель и директор нашей компани, её мозг и сердце</p>
            </div>

            <div className={classes.group__container__card}>
              <div className={classes.group__container__card__photoman}></div>
              <h3>Зимина Анна Михайловна</h3>
              <h7>Гл. менеджер</h7>
              <p>Наш самый главный и справедливый руководитель всех отделов</p>
            </div>

            <div className={classes.group__container__card}>
              <div className={classes.group__container__card__photomana}></div>
              <h3>Бочкарёва Наталья Владимировна</h3>
              <h7>Гл. риэлтор</h7>
              <p>
                Руководитель отдела, который подберёт вам помещение и проводёт
                по пути его аренды
              </p>
            </div>

            <div className={classes.group__container__card}>
              <div className={classes.group__container__card__photomaneg}></div>
              <h3>Колупаев Иван Владимирович</h3>
              <h7>Гл. юрист</h7>
              <p>
                Руководитель отдела, который поможет разобраться во всех
                договорах и правильно заключить их
              </p>
            </div>

            <div className={classes.group__container__card}>
              <div className={classes.group__container__card__photocol}></div>
              <h3>Краснов Сергей Сергеевич</h3>
              <h7>Руководитель call-центра</h7>
              <p>
                Руководитель отдела, что первый откликнется на вашу заявку и
                ответит на все ваши вопросы, выручит в трудную минуту
              </p>
            </div>
          </div>
        </div>

        <div className={classes.container}>
          <h1>Наше местоположение</h1>
          <div className={classes.location}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.3620006315555!2d39.25562130204296!3d51.6715165607093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b2fbc35c0a521%3A0xe438ac6916d6f42f!2z0YPQuy4g0JTQuNC80LjRgtGA0L7QstCwLCA3Nywg0JLQvtGA0L7QvdC10LYsINCS0L7RgNC-0L3QtdC20YHQutCw0Y8g0L7QsdC7LiwgMzk0MDQy!5e0!3m2!1sru!2sru!4v1655066754981!5m2!1sru!2sru"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
