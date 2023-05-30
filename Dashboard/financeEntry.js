
const form = document.querySelector('#finance-form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// const userId = document.querySelector('#userId').value;
	const financeType = document.querySelector('#financeType').value;
	const tag = document.querySelector('#tag').value;
	const invDt = document.querySelector('#invDt').value;
	const amt = document.querySelector('#amt').value;

	axios.post('http://localhost:8080/finance/user', {
		userId: `1`,
		financeType: financeType,
		tag: tag,
		invDt: invDt,
		amt: amt
	})

	.then(res => {
		console.log(res);
		result.textContent = 'Finance Info Added!';
        alert('Finance added successfully!');
        location.reload();
        document.getElementById('finance-form').reset();
	})
	.catch(err => {
		result.textContent = 'Error Occured!';
	})
});



const financeTypeSelect = document.getElementById('financeType');
const tagSelect = document.getElementById('tag');

financeTypeSelect.addEventListener('change', () => {
  if (financeTypeSelect.value === 'INCOME') {
    tagSelect.innerHTML = `
      <option value="">Select Category</option>
      <option value="Salary" class="income-option">Salary</option>
      <option value="Investments" class="income-option">Investments</option>
      <option value="Bonus" class="income-option">Bonus</option>
    `;
  } else if (financeTypeSelect.value === 'EXPENSES') {
    tagSelect.innerHTML = `
      <option value="">Select Category</option>
      <option value="Food" class="expenses-option">Food</option>
      <option value="Rent" class="expenses-option">Rent</option>
      <option value="Utilities" class="expenses-option">Utilities</option>
    `;
  } else if (financeTypeSelect.value === 'INVESTMENT') {
    tagSelect.innerHTML = `
      <option value="">Select Category</option>
      <option value="Stocks" class="investment-option">Stocks</option>
      <option value="Bonds" class="investment-option">Bonds</option>
      <option value="Real Estate" class="investment-option">Real Estate</option>
      <option value="Other" class="investment-option">Other</option>
    `;
    
    const otherOption = document.createElement('option');
    otherOption.value = 'Other';
    otherOption.classList.add('investment-option');
    otherOption.text = 'Enter by User';
    tagSelect.appendChild(otherOption);
  }
});


const form2 = document.getElementById('savingsForm');

form2.addEventListener('submit', function(event) {
  event.preventDefault();

  const category = document.getElementById('category').value;
  const goal = parseFloat(document.getElementById('goal').value);
  const currAmt = parseFloat(document.getElementById('currAmt').value);
  const target = document.getElementById('target').value;
  const processedDate = document.getElementById('processedDate').value;
  // const userId = parseInt(document.getElementById('userId').value);

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
      location.reload();
      form2.reset();
    })
    .catch(error => {
      console.error('Error posting savings data:', error);
    });
});
