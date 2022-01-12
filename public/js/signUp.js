let signUpFormHandler= async (event) => {
    event.preventDefault();
    const name = document.getElementById('username').value
    const password = document.getElementById('password').value
    const body = JSON.stringify({'name': name, 'password' : password  })

    if(name && password){
        const response = await fetch('/api/userRoutes/', {
            method: 'POST',
            body: body,
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            // If successful, redirect the browser to the home page
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
        
    }
} 

let submit = document.getElementById('submit')

submit.addEventListener('click', signUpFormHandler)