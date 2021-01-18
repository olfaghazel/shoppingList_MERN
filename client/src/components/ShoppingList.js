import { Container, Button, ListGroup } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem } from "../actions/itemActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ShoppingList = () => {
  const items = useSelector((state) => state.item.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <Container>
      {items ? (
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroup.Item>
                  <Button
                    className="remove-btn"
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(deleteItem(_id))}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      ) : (
        <h2>loading</h2>
      )}
    </Container>
  );
};
export default ShoppingList;
