import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Products from '../products'

const ProductScreen = ({ match }) => {
    const product = Products.find((p) => {
        return p._id === match.params.id
    })
    console.log(product)
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductScreen
