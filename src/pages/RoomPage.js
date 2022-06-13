import React from "react";
import classes from "./RoomPage.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneRoom } from "./../http/roomAPI";
import ModalRequest from "./../components/modals/ModalRequest";

const RoomPage = () => {
  const [room, setRoom] = useState({ info: [] });
  const { id } = useParams();
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    fetchOneRoom(id).then((data) => setRoom(data));
  }, []);

  return (
    <>
      <div className={classes.main__container}>
        <div className={classes.container}>
          <div className={classes.row}>
            {" "}
            <div className={classes.img}>
              <img
                src={process.env.REACT_APP_API_URL + room.img}
                alt="img"
              ></img>
            </div>
            <div className={classes.content}>
              <h2>{room.name}</h2>
              <h3>Стоимость: {room.price} руб.</h3>
              <h3>Площадь: {room.area}</h3>
              <button onClick={() => setModalActive(true)}>Оставить заявку</button>
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <h1>Информация</h1>
          <div className={classes.description}>
            {room.info.map((info) => (
              <div className={classes.description__item} key={info.id}>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalRequest active={modalActive} setActive={setModalActive}>
        <div className={classes.modalrequest}>
          <h1>Заявка</h1>
          <form>
            <h5>Ваше ФИО</h5>
            <input className={classes.modalrequest__input} placeholder="Иванов Иван Иванович" required></input>
            <h5>Ваш Email</h5>
            <input className={classes.modalrequest__input} placeholder="example@gmail.com" type="email" required></input>
            <h5>Ваш номер телефона</h5>
            <input className={classes.modalrequest__input} placeholder="8 (800) 555-35-35" type="tel" required></input>
            <h5>Ваши пожелания</h5>
            <textarea className={classes.modalrequest__input} placeholder="Сообщение..."></textarea>

            <button>Отправить</button>
          </form>
        </div>
      </ModalRequest>
    </>
  );
};

export default RoomPage;
