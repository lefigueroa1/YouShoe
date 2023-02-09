import React from "react"
import Product from "../components/Product"
import products from "../data/products"
import {Container, Row, Col} from "react-bootstrap"

function HomeScreen(){
    return(
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} Lg={4} xL={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen