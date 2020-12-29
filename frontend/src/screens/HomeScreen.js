import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../src/products'
import Product from './components/Product'
const HomeScreen = () => {
    return (
        <>
            <Row>
                <h1>Hello</h1>
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
