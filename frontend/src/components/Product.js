import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </a>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text className='my-3' as="div">
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card>
    )
}

export default Product
