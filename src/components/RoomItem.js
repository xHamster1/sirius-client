import React from "react";
import { useHistory} from "react-router-dom";
import { ROOM_ROUTE } from "../utils/consts";
import classes from "./../components/RoomItem.module.scss";


const RoomItem = ({room}) => {
  const history = useHistory();

  return (
    <div
      className={classes.card}
      onClick={() => history.push(ROOM_ROUTE + "/" + room.id)}
    >
      <img
        src={process.env.REACT_APP_API_URL + room.img}
        className={classes.card__img}
        alt="img"
      ></img>
      <div className={classes.card__content}>
        <div className={classes.card__content__title}>
          <h5>{room.name}</h5>
        </div>
        <div className={classes.card__content__text}>
          <h5>{room.price} руб/мес</h5>
          <h5>{room.area} кв.м.</h5>
        </div>
      </div>
      <h1>
        </h1>
    </div>
  );
};

export default RoomItem;
