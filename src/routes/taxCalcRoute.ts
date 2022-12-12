import express from 'express';
const taxRouter = express.Router();
const taxCalcController = require('../controllers/taxCalcController');

taxRouter.route('/taxcalculator').post(taxCalcController.getSimpleCalculator);

export default taxRouter;
