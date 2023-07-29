//Step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
  //step-2: get the email address inside the email input field
  // always remember to use .value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  if (email === 'Muntaha@Meem.com' && password === 'secret'){
    window.location.href = 'bank.html'
  }
  else {
    alert('invalid user')
  }
})