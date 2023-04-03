const loadCommentsBtn = document.querySelector(`#loadCommentsBtn`)
const commentsSectionElem = document.querySelector(`#comments`)
const createCommentsElem = (comments) => {
  const commentListElem = document.createElement(`ol`)

  for (const comment of comments) {
    const commentElem = document.createElement(`li`)
    commentElem.innerHTML = `
    <article>
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
    </article>
    `
    commentListElem.appendChild(commentElem)
  }
  return commentListElem
}

const getComments = async () => {
  const postId = loadCommentsBtn.dataset.postid;
  //using the dataset method, we can access the data attr connected to the selected DOM element

  const res = await fetch(`/posts/${postId}/comments`);
  //fetch() handles the async http request to get data from the server

  const resData = await res.json()
  //parses the JSON response from the fetch request

  console.log(resData)

  createCommentsElem(resData)
}


loadCommentsBtn.addEventListener(`click`, getComments)