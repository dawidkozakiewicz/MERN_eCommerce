import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'
const HomeScreen = () => {
    return (
        <>
            <Row>
                {products.map((product) => {
                    return (<Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={product._id} product={product} />
                    </Col>)
                })}
            </Row>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ut ad quas. Officia nemo praesentium dolor alias modi, dignissimos pariatur, nostrum numquam molestias architecto, recusandae quas iure expedita dicta consequuntur.</h1>
        </>
    )
}

export default HomeScreen
