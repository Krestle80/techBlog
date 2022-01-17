let postTitleInput = document.getElementById('postTitle')
let postContentInput = document.getElementById('postContent')
let editPostButton = document.getElementById('editPostBtn')

let targetPostId = ""

let editPostHandler = async ()=>{
    let title = postTitleInput.value
    let content = postContentInput.value
    let body = JSON.stringify({title, content, targetPostId})
    console.log(body)
    const response = await fetch('/api/postRoutes/update', {
        method: 'POST',
        body: body,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
    if(response.ok) location.reload()
    else alert('err')
}

editPostButton.addEventListener("click", editPostHandler)

let editPostModalHandler = (e) =>{
    console.log(e.target,"5")

    postTitleInput.value = e.target.dataset.title
    postContentInput.value = e.target.dataset.content

    targetPostId = e.target.id
}

document.querySelectorAll('.editBtn').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      editPostModalHandler(event)
    })
  })

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