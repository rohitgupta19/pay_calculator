import { describe, expect, it } from '@jest/globals';
import { calculateTaxPerMonth, getSimpleCalculatorService } from './taxCalcService';

describe('test tax calculator controller', () => {
  it('test controller return response', () => {
    expect(getSimpleCalculatorService).toBeDefined();
    expect(calculateTaxPerMonth).toBeDefined();
  });

  it('test controller for tax for salary < 20000', () => {
    expect(calculateTaxPerMonth(20000)).toEqual(0);
  });

  it('test controller for tax for salary > 20000', () => {
    expect(calculateTaxPerMonth(40000)).toEqual(166.67);
    expect(calculateTaxPerMonth(60000)).toEqual(500);
  });
});
