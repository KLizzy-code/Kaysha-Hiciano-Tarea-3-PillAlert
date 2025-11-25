// Login simple
const loginForm = document.getElementById('loginForm');
const demoUser = "admin";
const demoPass = "1234";

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;

  if (u === demoUser && p === demoPass) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'registro.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
