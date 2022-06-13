import React, { createContext } from "react";
import "./styles/index.scss";
import ReactDOM from "react-dom";

import App from "./App";
import UserSite from "./site/UserSite";
import RoomSite from "./site/RoomSite";
import { BrowserRouter } from "react-router-dom";

export const Context = createContext(null);

ReactDOM.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        user: new UserSite(),
        room: new RoomSite(),
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
