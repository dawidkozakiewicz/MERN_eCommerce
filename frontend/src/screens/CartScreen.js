import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message.js'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id

    console.log(productId)

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])



    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link> </Message> : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => {
                            return (<ListGroup.Item key={Math.random()}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded></Image>
                                        <p>PRODUCT</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)
                        })}
                    </ListGroup>
                )}
            </Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
        </Row >
    )
}

export default CartScreen
