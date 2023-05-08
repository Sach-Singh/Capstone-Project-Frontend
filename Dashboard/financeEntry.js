
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
		result.textContent = 'Finance Info Added!';
        alert('Finance added successfully!');
        location.reload();
        document.getElementById('finance-form').reset();
	})
	.catch(err => {
		result.textContent = 'Error Occured!';
	})
});


