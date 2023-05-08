
const incomeEndpoint = 'http://localhost:8080/finance/total-income';
const expensesEndpoint = 'http://localhost:8080/finance/total-expenses';

// Fetch data from endpoints using Axios
axios.all([
  axios.get(incomeEndpoint),
  axios.get(expensesEndpoint)
]).then(axios.spread((incomeResponse, expensesResponse) => {
  const income = incomeResponse.data;
  const expenses = expensesResponse.data;

  // // Calculate the total income and expenses
  // const totalIncome = income.reduce((acc, curr) => acc + curr, 0);
  // const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);

  const donutChart = new Chart('donut-chart', {
    type: 'doughnut',
    data: {
      labels: ['Income', 'Expenses'],
      datasets: [{
        data: [income, expenses],
        backgroundColor: ['#91e8d9', '#d75b5b'],
        borderWidth: 1,
        borderColor: 'black',

      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
      
    }
  });
})).catch(error => {
  console.log('Error fetching data:', error);
});
