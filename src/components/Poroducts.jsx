import { useEffect, useState } from "react";

import { Button, Card, Spinner } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setLoading(false);
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
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
                <Button variant="primary">Add to cart</Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
