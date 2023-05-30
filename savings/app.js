const form = document.getElementById('savingsForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const category = document.getElementById('category').value;
  const goal = parseFloat(document.getElementById('goal').value);
  const currAmt = parseFloat(document.getElementById('currAmt').value);
  const target = document.getElementById('target').value;
  const processedDate = document.getElementById('processedDate').value;
  const userId = parseInt(document.getElementById('userId').value);

  const data = {
    category: category,
    goal: goal,
    currAmt: currAmt,
    target: target,
    processedDate: processedDate,
    userDto: {
      id: '1'
    }
  };

  axios.post('http://localhost:8080/savings/', data)
    .then(response => {
      console.log('Savings data posted successfully:', response.data);
      form.reset();
    })
    .catch(error => {
      console.error('Error posting savings data:', error);
    });
});
