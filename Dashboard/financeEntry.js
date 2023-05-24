
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
  }
});

