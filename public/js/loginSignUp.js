let signIn = document.getElementById('signUpBtn')
let login = document.getElementById('loginBtn')

let loginPage = () => {
    document.location.replace('/login')
}
let signUpPage= () => {
    document.location.replace('/signUp')
}

signIn.addEventListener('click', signUpPage)
login.addEventListener('click', loginPage)