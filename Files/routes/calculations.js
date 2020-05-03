const express = require('express');
const router = express.Router();
const { getCalculations, addCalculation, deleteCalculation } = require('../controllers/calculation_controller');

router
    .route('/')
    .get(getCalculations)
    .post(addCalculation);

router
    .route('/:id')
    .delete(deleteCalculation);

module.exports = router;