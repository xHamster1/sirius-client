import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { Context } from "./../../index";
import { useState } from "react";
import { fetchAddress, fetchTypes } from "../../http/roomAPI";
import { observer } from 'mobx-react-lite';
import { createRoom } from './../../http/roomAPI';

const CreateRoom = observer(({ show, onHide }) => {
  const { room } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [file, setFile] = useState(null)
  const [area, setArea] = useState()
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then(data => room.setTypes(data))
    fetchAddress().then(data => room.setAddress(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }


  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addRoom = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('typeId', room.selectedType.id )
    formData.append('addressId', room.selectedAddress.id )
    formData.append('area', `${area}`)
    formData.append('info', JSON.stringify(info))
    createRoom(formData).then(data => onHide())
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить помещение
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mb-3">
            <Dropdown.Toggle>{room.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {room.types.map((type) => (
                <Dropdown.Item onClick={() => room.setSelectedTypes(type)} key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mb-3">
            <Dropdown.Toggle>{room.selectedAddress.name || "Выберите адрес"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {room.address.map((address) => (
                <Dropdown.Item onClick={() => room.setSelectedAddress(address)} key={address.id}>{address.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название помещения ..."
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость помещения ..."
            type="number"
          />
          <Form.Control
            value={area}
            onChange={e => setArea(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите площадь помещения ..."
            type="number"
          />
          <Form.Control className="mt-3" style={{ width: 350 }} type="file" 
          onChange={selectFile}
          />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новую информацию
          </Button>
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control 
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder="Введите название..." 
                />
              </Col>
              <Col md={4}>
                <Form.Control 
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                placeholder="Введите описание..." 
                />
              </Col>
              <Col md={4}>
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addRoom}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateRoom;
