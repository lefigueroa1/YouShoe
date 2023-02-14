import React, {useState, useEffect} from "react"
import Product from "../components/Product"
// import products from "../data/products"
import axios from 'axios'
import {Container, Row, Col} from "react-bootstrap"

function HomeScreen(){
    // function getCookie(name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    //   }
    //   const csrftoken = getCookie('csrftoken');
    //   axios.defaults.headers.common["X-CSRFToken"]=csrftoken


    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts(){
            const { data } = await axios.get("/products/")
            setProducts(data)
        }
        getProducts()
    },[])


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