const loadCommentsBtn = document.querySelector(`#loadCommentsBtn`)

const getComments = async () => {
  const postId = loadCommentsBtn.dataset.postid;
  //using the dataset method, we can access the data attr connected to the selected DOM element

  const res = await fetch(`/posts/${postId}/comments`);
  //fetch() handles the async http request to get data from the server

  const resData = await res.json()
  //parses the JSON response from the fetch request

  console.log(resData)

}


loadCommentsBtn.addEventListener(`click`, getComments)