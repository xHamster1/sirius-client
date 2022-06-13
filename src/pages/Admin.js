import React, { useContext, useState } from "react";
import { Context } from "./../index";
import Auth from "./Auth";
import { observer } from "mobx-react-lite";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateRoom from "../components/modals/CreateRoom";
import CreateAddress from "../components/modals/CreateAddress";

const Admin = observer(() => {
  const { user } = useContext(Context);
  const [typeVisible, setTypeVisible] = useState(false)
  const [addressVisible, setAddressVisible] = useState(false)
  const [roomVisible, setRoomVisible] = useState(false)
  return (
    <>
      {user.isAuth ? (
        <Container className="d-flex flex-column "
        style={{ height: window.innerHeight - 100 }}
        >
          <Button variant={"outline-dark"} className="mt-4 p-3" onClick={() => setAddressVisible(true)}>
            Добавить адрес
          </Button>
          <Button variant={"outline-dark"} className="mt-4 p-3" onClick={() => setTypeVisible(true)}>
            Добавить тип
          </Button>
          <Button variant={"outline-dark"} className="mt-4 p-3" onClick={() => setRoomVisible(true)}>
            Добавить помещение
          </Button>
          <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
          <CreateRoom show={roomVisible} onHide={() => setRoomVisible(false)}/>
          <CreateAddress show={addressVisible} onHide={() => setAddressVisible(false)}/>
        </Container>
      ) : (
        <Auth />
      )}
    </>
  );
});

export default Admin;
