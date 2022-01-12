
//grabbing all the nav tabs 
const homeBtn = document.getElementById('home')
const dashBtn = document.getElementById('dash')


const logoutBtn = document.getElementById('logout')
const loginBtn = document.getElementById('login')
const signUpBtn = document.getElementById('signUp')

// handlers to give the nav functionality
let homeHandler = () => {
    document.location.replace('/')
}
let dashHandler = () => {
    document.location.replace('/dashBoard')
}
let logoutHandler = async () => {
    const response = await fetch('/api/userRoutes/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}
let loginNavHandler = () => {
    document.location.replace('/login')
}
let signUpNavHandler = () => {
    document.location.replace('/signUp')
}

homeBtn.addEventListener('click', function() {homeHandler()});
dashBtn.addEventListener('click', function() {dashHandler()});
if(logoutBtn){
    logoutBtn.addEventListener('click', function() {logoutHandler()});
}
else {
    loginBtn.addEventListener('click', function() {loginNavHandler()});
    signUpBtn.addEventListener('click', function() {signUpNavHandler()});
}