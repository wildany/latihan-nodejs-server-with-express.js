import express from 'express';
import {
    getProducts,
    getProductById,
    saveProducts,
    updateProduct,
    deleteProduct
}
    from '../controller/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', saveProducts);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
export default router;