const loadCommentsBtn = document.querySelector(`#loadCommentsBtn`)

const getComments = async () => {
  const postId = loadCommentsBtn.dataset.postid;
  const res = await fetch(`/posts/${postId}/comments`);
  const resData = await res.json()

  console.log(resData)

}


loadCommentsBtn.addEventListener(`click`, getComments)