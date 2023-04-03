const loadCommentsBtn = document.querySelector(`#loadCommentsBtn`)
const commentsSectionElem = document.querySelector(`#comments`)
const commentsFormElem = document.querySelector(`#comments-form`)
const commentTitle = document.querySelector(`#title`)
const commentText = document.querySelector(`#text`)

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

  const commentsListElem = createCommentsElem(resData)

  commentsSectionElem.innerHTML = ``
  commentsSectionElem.appendChild(commentsListElem)
}

const saveComment = async (e) => {
  e.preventDefault()

  const postId = commentsFormElem.dataset.postid;

  const newTitle = commentTitle.value
  const newText = commentText.value

  fetch(`/posts/${postId}/comments`)
}

loadCommentsBtn.addEventListener(`click`, getComments)
commentsFormElem.addEventListener(`submit`, )