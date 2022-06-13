import React from "react";

import classes from "./About.module.scss";

function About() {
  return (
    <div className={classes.main__container}>
      <div className={classes.container}>
        <h1>О нашей компании</h1>
        <div className={classes.about}>
          <div className={classes.about__item}>
            <div className={classes.about__content}>
              <h3>История</h3>
              <p>
                Компания "Сириус" была основана в 2007 году. Главной целью
                создания была помощь начинающим бизнесменам в поиске и аренде
                коммерческих помощений. Благодаря трудолюбию и капельки везения
                наша компания в первые года смогла найти надёжных арендодателей.
                С клиентами было немного труднее: мы были малоизвестной
                компанией, без репутации и отзывов, так же наши клиенты -
                бизнесмены, а для них главное, чтобы было меньше рисков; но мы с
                этим справились. На сегодняшний день мы входим в топ-3 компаний-посредников на рынке недвижимости.
              </p>
            </div>
            <div className={classes.about__content}>
              <h3>Коллектив</h3>
              <p>
                Все наши сотрудники работают в сфере недвижимости не первый год.
                Благодаря своему огромному опыту они знают разные лазейки и нюансы в
                своём деле. Согласитесь в вопросе денег всегда лучше иметь дело
                с профессионалом.
              </p>
            </div>
            <div className={classes.about__content}>
              <h3>Особенности</h3>
              <p>
                На рынке недвижимости наша компания считается самой
                современной, ведь именно мы первыми начали практиковать:
                удалённый показ помощений нашим клиентам, общаться с нашими
                клиентами в мессенджерах и использовать электронные подписи, что
                заметно уменьшает ваше затраченное время. Время - деньги!
              </p>
            </div>
          </div>
          <div className={classes.about__img}></div>
        </div>
      </div>
    </div>
  );
}

export default About;