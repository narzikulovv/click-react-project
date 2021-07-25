import React, { Component } from 'react'
import {DataContext} from './Context'
import { FaBars, FaCartPlus, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';


class Header extends Component {

    static contextType = DataContext

    state = {
        toggle: false
    }

    menuToggle = () => {

        this.setState({
            toggle: !this.state.toggle
        })
    }


    render() {

        const {toggle} = this.state;
        const {cart} = this.context;

        return (
            <header>
                <Container>
                 <div className="header-item">
                 <div className="menu" onClick={this.menuToggle}>
                        <FaBars />
                    </div>
                    <div className="logo">
                        <h1><Link to="/product">Nike</Link></h1>
                    </div>
                    <nav>
                        <ul className={toggle ? "toggle" : ""}>
                            <li><Link to="/product">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login / Register</Link></li>
                            <li className="close" onClick={this.menuToggle}>
                                <FaTimes />
                            </li>
                        </ul>
                        <div className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to="/cart" className="fa">
                                <FaCartPlus />
                            </Link>
                        </div>
                    </nav>
                 </div>
                </Container>
            </header>
        )
    }
}

export default Header