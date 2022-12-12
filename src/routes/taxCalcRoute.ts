import express from 'express';
const taxRouter = express.Router();
const taxCalcController = require('../controllers/taxCalcController');

taxRouter.route('/monthly').post(taxCalcController.getSimpleCalculator);

export default taxRouter;
