const form = document.querySelector('form');
form.addEventListener('submit', createUser);

function createUser(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = { name, email, password };
  axios.post('http://localhost:8080/register', user)
    .then(response => {
      console.log(response.data);
      alert('User created successfully!');
      form.reset();
    })
    .catch(error => {
      console.error(error);
      alert('Error creating user.');
    });
}
