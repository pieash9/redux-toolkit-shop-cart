import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch to remove action
    dispatch(remove(id));
  };
  return (
    <div>
      <h3 className="my-4">Product Dashboard</h3>
      <div className="row g-4">
        {cartProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Card style={{ width: "18rem" }} className="h-100">
              <div className="text-center my-3">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "8rem", height: "10rem" }}
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  onClick={() => removeToCart(product.id)}
                  variant="danger"
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
