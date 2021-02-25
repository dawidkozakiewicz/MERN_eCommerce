import express from 'express'
import { getProducts, getProductbyId } from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts)


router.route('/:id').get(getProductbyId)



// router.get('/', async (req, res) => {
//     const products = await Product.find({})

//     res.json(products)
// })

// router.get('/:id', async (req, res) => {
//     const product = await Product.findById(req.params.id)

//     if (product) {
//         res.json(product)
//     } else {
//         res.status(404).json({ message: 'Product not found' })
//     }
// })

export default router