import React from "react";
import { useState, useContext } from "react";

import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { login } from "./../http/UserAPI";
import { observer } from "mobx-react-lite";
import { Context } from "./../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const [Login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      let data;
      data = await login(Login, password);
      user.setUser(user);
      user.setIsAuth(true);
    } catch (e) {
      alert(e.response.data.message)
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 100 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="Введите логин..."
            className="mt-3"
            value={Login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Form.Control
            placeholder="Введите пароль..."
            className="mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button
            className="mt-3 align-self-center"
            variant={"outline-primary"}
            onClick={signIn}
          >
            Войти
          </Button>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
