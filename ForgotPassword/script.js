
const form = document.querySelector('form');
const loginStatus = document.querySelector('#login-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;


axios.post('http://localhost:8080/users/forgot', { email})
    .then(response => {
      console.log(response.data);
      if (response.data === 'SUCCESS') {
        alert('Reset Link Sent');
      window.location.href = 'D:/Capstone Project/Capstone-Project-Frontend/login/index.html';

      } else if (response.data === 'FAILURE') {
        alert('Emaill not Registered :(');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Error .');
    }
    );
}
)
