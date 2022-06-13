import React from 'react'
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createAddress } from './../../http/roomAPI';
import { useState } from 'react';

const CreateAddress = ({show, onHide}) => {
  const [value, setValue] = useState("");
  const addAddress = () => {
    createAddress({ name: value }).then(data => {
      setValue('')
      onHide()
    });
  };


  return (
    <Modal 
    show={show}
    onHide={onHide}
    size="lg" 
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить адрес
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                placeholder={"Введите адрес"}
                value = {value}
                onChange={e => setValue(e.target.value)}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addAddress}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateAddress