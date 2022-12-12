import { Request, Response } from 'express';
import { getSimpleCalculatorService } from '../services/taxCalcService';
export const getSimpleCalculator = (req: Request, res: Response) => {
  try {
    const resp = getSimpleCalculatorService(req.body.name, req.body.salary);
    console.log('resp', resp);
    res.status(200).send({ status: 'success', data: resp });
  } catch (error) {
    res.status(400).send({ status: 'success', data: error });
  }
};
