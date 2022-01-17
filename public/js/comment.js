let commentBtn = document.getElementById('commentBtn')
let commentBar = document.getElementById('commentBar')
let postId = document.getElementById('postId').innerHTML
let commentHandler = async (e)=> {
    e.preventDefault
        let comment = commentBar.value
        let body =  JSON.stringify({comment, postId})
        console.log(comment)
        console.log(body)
        const response = await fetch('/api/commentRoutes', {
            method: 'POST',
            body: body,
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            // If successful, redirect the browser to the home page
            document.location.reload();
          } else {
            alert(response.statusText);
          }
    
}
commentBtn.addEventListener("click", commentHandler)