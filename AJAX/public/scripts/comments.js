const loadCommentsBtn = document.querySelector(`#loadCommentsBtn`)

const getComments = async () => {
  const postId = loadCommentsBtn.dataset.postId;
  const res = await
      fetch(`/posts/${postId}/comments`)
      .then(async (res) => await res.json())
      .then(data => { console.log(data) })
      .catch((err) => {
          console.log(`Rejected`, err)
      })
}


loadCommentsBtn.addEventListener(`click`, getComments)