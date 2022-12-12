import { describe, expect, it } from '@jest/globals';
import { getSimpleCalculatorService } from '../src/services/taxCalcService';

describe('test tax calculator controller', () => {
  it('test controller return response', () => {
    const payslip = getSimpleCalculatorService('rohit', 0);
    expect(payslip?.name).toBe('rohit');
  });

  it('test controller return response', () => {
    const payslip = getSimpleCalculatorService('rohit', 60000);
    expect(payslip?.name).toBe('rohit');
    expect(payslip?.['net monthly income']).toBe(4500);
  });
});
