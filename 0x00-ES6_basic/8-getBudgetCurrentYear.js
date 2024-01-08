function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const keys = [`income-${getCurrentYear()}`, `gdp-${getCurrentYear()}`, `capita-${getCurrentYear()}`];
  const values = [income, gdp, capita];
  const budget = keys.reduce((res, key, index) => {
    res[key] = values[index];
    return res;
  }, {});

  return budget;
}
