import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { DataContext } from '../Context'
import Color from './Color'

class Cart extends Component {

  static contextType = DataContext

  componentDidMount() {

    this.context.getTotal()
  }

  render() {

    const { cart, reduction, increase, removeProduct, total } = this.context

    if (cart.length === 0) {
      return <h2 style={{ textAlign: 'center' }}>Nothings Product</h2>
    }
    else {
      return (
        <Container>
          <Row>
            {
              cart.map(item => {
                return (
                  <Col lg={8} className="detail" style={{marginBottom: '30px'}}>
                    <div className="details" key={item._id}>
                      <img src={item.image} alt="" />
                      <div className="box">
                        <div className="rows">
                          <h2>{item.title}</h2>
                          <span>${item.price * item.count}</span>
                        </div>
                        <p>
                          <Color colors={item.color} />
                        </p>
                        <p>{item.discription}</p>
                        <div className="amount">
                          <button className="count" onClick={() => reduction(item._id)}> - </button>
                          <span>{item.count}</span>
                          <button className="count" onClick={() => increase(item._id)}> + </button>
                        </div>
                      </div>
                      <div className="delete" onClick={() => removeProduct(item._id)}>x</div>
                    </div>
                  </Col>
                )
              })
            }
            <Col lg={12}>
              <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total: ${total}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }


  }
}

export default Cart