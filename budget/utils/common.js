export function prcoessCategoryDataToDisplay(categories) {
  let chartData = categories.map((item) => {
    let confirmExpenses = item.expenses.filter((a) => a.status === "C");
    let total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

    return {
      name: item.name,
      y: total,
      expenseCount: confirmExpenses.length,
      color: item.color,
      id: item.id,
    };
  });

  let filterChartData = chartData.filter((item) => item.y > 0);

  let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

  let finalChartData = filterChartData.map((item) => {
    let percentage = ((item.y / totalExpense) * 100).toFixed(0);
    return {
      label: `${percentage}`,
      y: Number(item.y),
      expenseCount: item.expenseCount,
      color: item.color,
      name: item.name,
      id: item.id,
    };
  });

  return finalChartData;
}

export function setSelectCategoryByName(name, categories, setSelectedCategory) {
  let category = categories.filter((a) => a.name === name);
  setSelectedCategory(category[0]);
}
