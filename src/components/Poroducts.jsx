import { useEffect, useState } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

function Products() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  useEffect(() => {
    // api
    // dispatch an action for fetch  products
    dispatch(getProducts());

    // fetch(`https://fakestoreapi.com/products`)
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    setLoading(false);
  }, []);

  if (status == "loading") {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if (status == "error") {
    return (
      <Alert key={"danger"} variant="danger" className="text-center">Something went wrong! Try again later.</Alert>
    );
  }
  return (
    <div className=" gap-3">
      <h3 className="my-4">Product Dashboard</h3>
      <div className="row g-4">
        {products.map((product) => (
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
                <Button onClick={() => addToCart(product)} variant="primary">
                  Add to cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
