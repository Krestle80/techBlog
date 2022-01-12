let posts = document.getElementsByClassName('postTitle')

let pullPostPage = async (e) =>{
    console.log(e.target)
    let clickedPost = e.target
    document.location.replace('/post/' + clickedPost.dataset.id)
}

Array.from(posts).forEach(function(post) {
    post.addEventListener('click', pullPostPage)
})
