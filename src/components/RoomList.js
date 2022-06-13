import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "./../index";
import { Row } from "react-bootstrap";
import RoomItem from "./RoomItem";
import classes from "./RoomList.module.scss";

const RoomList = observer(() => {
  const { room } = useContext(Context);
  return (
    <div className={classes.row}>
      {room.rooms.map((room) => (
        <div className={classes.item}>
          <RoomItem key={room.id} room={room}/>
        </div>
      ))}
    </div>
  );
});

export default RoomList;
