import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import { Container, Row, Col } from 'react-bootstrap';


class Product extends Component {

  static contextType = DataContext

  render() {

    const { products, addCart } = this.context
    // console.log(products);

    return (

      <div className="product">
        <Container>
          <Row>
            {
              products.map(product => {
                return (
                  <Col lg={4} md={6}>
                    <div className="card" key={product._id}>
                      <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt="" />
                        </Link>
                        <div className="content">
                          <h3>
                          {product.title}
                          </h3>
                          <span>${product.price}</span>
                          <p>{product.discription}</p>
                          <button onClick={() => addCart(product._id)}>Add to cart</button>
                        </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    )
  }
}

export default Product