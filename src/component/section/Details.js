import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Color from './Color'

class Details extends Component {

  static contextType = DataContext

  state = {
    product: []
  }

  getProduct = () => {

    // if (this.props.match.params.id){
    const res = this.context.products
    const data = res.filter(item => {
      return item._id == this.props.match.params.id
    })

    this.setState({
      product: data
    })
    console.log(data);
  }
  // }



  componentDidMount() {

    this.getProduct()
  }

  render() {
    const { product } = this.state
    const {addCart} = this.context
    return ( 
      
        <Container>
          <Row>
          {
            product.map(item => {
              return (
                <Col lg={8} className="detail">
                <div className="details" key={item._id}>
                  <img src={item.image} alt="" />
                  <div className="box">
                    <div className="rows">
                      <h2>{item.title}</h2>
                      <span>${item.price}</span>
                    </div>
                    <p>
                      <Color colors={item.color} />
                    </p>
                    <p>{item.discription}</p>
                    <Link to="/cart" className="add" onClick={() => addCart(item._id)}>
                      Add to cart
                    </Link>
                  </div>
                </div> 
                </Col>
              )
            })
          }
          </Row>
        </Container>
  
    )
  }
}

export default Details