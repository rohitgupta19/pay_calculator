/* type Employee = {
  name: string;
  gross_monthly_income: string;
  incomeTax: number;
  net_monthly_income: string;
}; */

export const getSimpleCalculatorService = (name: string, annual_salary: number) => {
  try {
    console.log('name', name);
    console.log('annual_salary', annual_salary);
    const gross_monthly_income = annual_salary / 12;
    console.log('gross_monthly_income', gross_monthly_income);
    const incomeTax = calculateTaxPerMonth(annual_salary);
    const net_monthly_income = gross_monthly_income - incomeTax;
    console.log('net_monthly_income', net_monthly_income);
    const payslip = {
      name,
      'gross monthly income': gross_monthly_income,
      'monthly income tax': incomeTax,
      'net monthly income': net_monthly_income
    };

    /*  const payslip1: Employee = {
      name,
      gross_monthly_income: gross_monthly_income.toFixed(2),
      incomeTax: incomeTax,
      net_monthly_income: net_monthly_income.toFixed(2)
    }; */
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
  return tax;
};

const taxRate = {
  first: 2000,
  second: 6000,
  third: 36000
};
