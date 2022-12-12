type Employee = {
  name: string;
  grossMonthlyIncome: number;
  incomeTax: number;
  netMonthlyIncome: number;
};

export const getSimpleCalculatorService = (name: string, annual_salary: number) => {
  try {
    const grossMonthlyIncome = annual_salary / 12;
    const incomeTax = calculateTaxPerMonth(annual_salary);
    const netMonthlyIncome = grossMonthlyIncome - incomeTax;
    const payslip: Employee = {
      name,
      grossMonthlyIncome,
      incomeTax,
      netMonthlyIncome
    };
    return payslip;
  } catch (error) {}
};

export const calculateTaxPerMonth = (taxableIncome: number): number => {
  let tax = 0.0;
  if (taxableIncome <= 20000) {
    tax = 0.0;
  } else if (taxableIncome <= 40000) {
    tax = ((taxableIncome - 20000) * 0.1) / 12;
  } else if (taxableIncome <= 80000) {
    tax = (taxRate.first + (taxableIncome - 40000) * 0.2) / 12;
  } else if (taxableIncome <= 180000) {
    tax = (taxRate.second + (taxableIncome - 80000) * 0.3) / 12;
  } else if (taxableIncome > 180000) {
    tax = (taxRate.third + (taxableIncome - 180000) * 0.4) / 12;
  }
  return Math.round(tax * 100) / 100;
};

const taxRate = {
  first: 2000,
  second: 6000,
  third: 36000
};
