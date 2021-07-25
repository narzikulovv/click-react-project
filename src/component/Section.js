import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Product from './section/Product'
import Details from './section/Details'
import Cart from './section/Cart'
import Payment from './section/Payment'
import { Container } from 'react-bootstrap';


class Section extends Component {
    render() {
        return (
            <Container>
                <section>
                    <Route path="/product" component={Product} exact />
                    <Route path="/product/:id" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/payment" component={Payment} />
                </section>
            </Container>
        )
    }
}

export default Section