

let postPush = async (event) =>{
    event.preventDefault()
    let title = document.getElementById('title').value
    let content = document.getElementById('content').value
    const body = JSON.stringify({'title':title, 'content':content})
    if(title && content){
        console.log(9)
        const response = await fetch('/api/postRoutes', {
            method: 'POST',
            body: body,
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response)
        if(response.ok) location.reload()
        else alert('err')

    }
}

let postBtn = document.getElementById('postBtn')

postBtn.addEventListener('click', postPush)