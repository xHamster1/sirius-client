import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "./../index";
import classes from "./TypeBar.module.scss";

const TypeBar = observer(() => {
  const { room } = useContext(Context);
  return (
  <div className={classes.typebar}>
      {room.types.map(type =>
            <div className={classes.typebar__item}
            onClick={() => room.setSelectedTypes(type)}
            key={type.id}
            >
                {type.name}
            </div>
        )}
  </div>
  );
});

export default TypeBar;
