let btnGoogle = document.querySelector('.btn');
btnGoogle.addEventListener('click', () => {
    let email = document.getElementById('email-reg').value;
    localStorage.setItem('email', JSON.stringify(email));
  window.location = 'index3.html'
})