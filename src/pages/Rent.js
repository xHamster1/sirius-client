import React, { useContext, useEffect } from "react";

import classes from "./Rent.module.scss";
import { Context } from "./../index";
import TypeBar from "../components/TypeBar";
import RoomList from "../components/RoomList";
import { observer } from "mobx-react-lite";
import { fetchAddress, fetchRoom, fetchTypes } from "../http/roomAPI";
import Pages from "../components/Pages";

const Rent = observer(() => {
  const { room } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => room.setTypes(data));
    fetchAddress().then((data) => room.setAddress(data));
    fetchRoom(null, null, 1, 2).then((data) => {
      room.setRooms(data.rows);
      room.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchRoom(room.selectedType.id, room.selectedAddress.id, room.page, 9).then(
      (data) => {
        room.setRooms(data.rows);
        room.setTotalCount(data.count);
      }
    );
  }, [room.page, room.selectedType, room.selectedAddress]);

  return (
    <div className={classes.main__container}>
      <div className={classes.row}>
        <div className={classes.container__sm}>
          <TypeBar />
        </div>
        <div className={classes.container}>
          <RoomList />
          <Pages />
        </div>
      </div>
    </div>
  );
});

export default Rent;
