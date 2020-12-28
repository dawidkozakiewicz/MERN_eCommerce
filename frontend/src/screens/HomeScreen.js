import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../src/products'
import Product from './components/Product'
const HomeScreen = () => {
    return (
        <>
            <h3>Chuj</h3>
            <h1>Hello</h1>
            <Row>
                {products.map((product) => {
                    return (<Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={product._id} product={product} />
                    </Col>)
                })}
            </Row>

        </>
    )
}

export default HomeScreen
