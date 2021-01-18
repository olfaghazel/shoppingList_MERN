import { addItem } from "../actions/itemActions";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
const ItemModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const toggle = () => {
    setModal(!modal);
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <Button
        variant="dark"
        style={{ marginBottom: "2rem" }}
        className="add-Item"
        onClick={toggle}
      >
        Add Item
      </Button>
      <Modal show={modal} centered toggle={toggle}>
        <Modal.Header toggle={toggle}>Add To Shopping List</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label for="item">Item</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="item"
                placeholder="AddShopping Item"
                onChange={onChange}
              />
              <Button
                variant="dark"
                style={{ marginBottom: "2rem" }}
                onClick={() => {
                  dispatch(addItem({ name: name }));
                  setName("");
                  toggle();
                }}
              >
                Add Item
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ItemModal;
