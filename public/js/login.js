

const loginFormHandler = async () => {
  
    // Collect values from the login form
    const name = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#passWord').value.trim();
    const body = JSON.stringify({'name':name, 'password':password})
    if (userName && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/userRoutes/login', {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
      } else {
        alert('incorrect username or password, pleas check your spelling and try again');
      }
    }
  };
  


let subButton = document.getElementById('submit')

subButton.addEventListener('click', loginFormHandler)