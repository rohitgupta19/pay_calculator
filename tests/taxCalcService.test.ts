import { describe, expect, it } from '@jest/globals';
import { calculateTaxPerMonth, getSimpleCalculatorService } from '../src/services/taxCalcService';

describe('test tax calculator controller', () => {
  it('test controller return response', () => {
    expect(getSimpleCalculatorService).toBeDefined();
    expect(calculateTaxPerMonth).toBeDefined();
  });

  it('test controller return response', () => {
    expect(calculateTaxPerMonth(20000)).toEqual(0);
    expect(calculateTaxPerMonth(40000).toFixed(2)).toEqual('166.67');
    expect(calculateTaxPerMonth(60000)).toEqual(500);
    expect(calculateTaxPerMonth(100000)).toEqual(1000);
    expect(calculateTaxPerMonth(180000)).toEqual(3000);
    expect(calculateTaxPerMonth(200000).toFixed(2)).toEqual('3666.67');
  });
});
