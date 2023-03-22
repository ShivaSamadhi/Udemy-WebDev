const loadCommentsBtn = document.querySelector(`#loadCommentsBtn`)

const getComments = async () => {
  const postId = loadCommentsBtn.dataset.postId;
  const res = await
      fetch(`/posts/${postId}/comments`)
      .then((res) => {
          return res.json()
      })
      .then(data => {
          return data
          })
      .catch((err) => {
          console.log(`Rejected`, err)
      })

}


loadCommentsBtn.addEventListener(`click`, getComments)