const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const matchWarning = document.querySelector('.match-warning')
const emptyWarning = document.querySelector('.empty-warning')

matchWarning.style.display = 'none'
emptyWarning.style.display = 'none'

function showMatchError(message){
  matchWarning.textContent = message
  matchWarning.style.display = 'flex'
}

function hideMatchError(){
  matchWarning.textContent = ''
  matchWarning.style.display = 'none'
}

function showEmptyError(message){
  emptyWarning.textContent = message
  emptyWarning.style.display = 'flex'
}

function hideEmptyError(){
  emptyWarning.textContent = ''
  emptyWarning.style.display = 'none'
}

function checkPasswordsMatch(){
  if (password.value !== confirmPassword.value){
    showMatchError('Passwords do not match')
  }
  else hideMatchError()
}

function checkPasswordsEmpty(){
  if (password.value == '' && confirmPassword.value == ''){
    showEmptyError('Please enter a password')
  }
  else hideEmptyError()
}

password.addEventListener('input', () => {
  checkPasswordsMatch()
})
password.addEventListener('input', () => {
  checkPasswordsEmpty()
})

confirmPassword.addEventListener('input', () => {
  checkPasswordsEmpty()
})

confirmPassword.addEventListener('input', () => {
  checkPasswordsMatch()
})


