import React from "react"
import {Link} from "react-router-dom"
import {Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap"
import Rating from '../components/Rating'
import products from "../data/products"

function ProductScreen({match}){
  
  let paramId = window.location['href'].split("/").at(-1)
  const product = products.find((p) => p.id ==paramId)
  return(
      
      <div>
        <Link to="/" className="btn btn-light my-3">Home</Link>
        <Row>
          <Col md={6}>
            <Image src={product.imageURL} alt={product.name} fluid/>
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
              </ListGroup.Item>

              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>

              <ListGroup.Item>
                Description: {product.script}
              </ListGroup.Item>

            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">

                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                    <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.items_left > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                 <Button className="col-12" disabled={product.is_in_inventory == false} type="button">Add To Cart</Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    )
}

export default ProductScreen